import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Gender[]> {
    return this.prisma.gender.findMany();
  }

  async findById(id: string): Promise<Gender> {
    const record = await this.prisma.gender.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async findOne(id: string): Promise<Gender> {
    return this.findById(id);
  }

  create(user: User,dto: CreateGenderDto): Promise<Gender> {
    if(!user.isAdmin){
      throw new UnauthorizedException("Usuario não autenticado")
    }
    const data: Gender = { ...dto };

    return this.prisma.gender.create({ data }).catch(this.handleError);
  }

  async update(user: User,id: string, dto: UpdateGenderDto): Promise<Gender> {
    if(!user.isAdmin){
      throw new UnauthorizedException("Usuario não autenticado")
    }
    await this.findById(id);

    const data: Partial<Gender> = { ...dto };

    return this.prisma.gender
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }
  async delete(user: User, id: string) {
    if(!user.isAdmin){
      throw new UnauthorizedException("Usuario não autenticado")
    }
    
    await this.findById(id);
    await this.prisma.gender.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLines || 'Algum erro ocorreu ao executar a operação',
    );
  }
}
