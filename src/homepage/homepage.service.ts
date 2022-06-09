import { Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  findByGender(): Promise<Game[]>{
    return this.prisma.game.findMany(
      {
        where:{genders: {
          some: {
            name: 'Terror'
          }
        }}
      }
    );
  }

  findOne(id: string) {
    return `This action returns a #${id} homepage`;
  }

  findAll(){
    return `teste`
  }
}
