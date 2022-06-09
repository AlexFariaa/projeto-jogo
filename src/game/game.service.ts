import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entities';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async findOne(id: string): Promise<Game> {
    return await this.findById(id);
  }

  create(dto: CreateGameDto){
    const data: Prisma.GameCreateInput = {
      ...dto,
      genders:{connect: dto.genders.map((genderId)=> ({
        id: genderId
      }))}
      }
  
    return this.prisma.game.create({data,
      select: {
        title: true,
        genders: {
          select: {
            name: true,
            }
          }
        }
      }
      
      ).catch(this.handleError);
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findById(id);

    const data: Partial<Prisma.GameCreateInput> = { ...dto,
    genders: {connect: dto.genders.map((genderId) => ({
      id: genderId
    }))}
    };

    return this.prisma.game
      .update({
        where: { id },
        data,
      })
      .catch(this.handleError);
  }
  async delete(id: string) {
    await this.findById(id);
    await this.prisma.game.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLines || 'Algum erro ocorreu ao executar a operação',
    );
  }
}
