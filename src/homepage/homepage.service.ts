import { Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  async findByGender(id: string) { 
    const favorites = await this.prisma.profile.findUnique({
      where: {
        id
      },
      select: {
        games: true
      }
    })

    const genres = await this.prisma.gender.findMany({
      select: {
        id: true,
        name: true,
        games: true,
      }
    })

    return [{favorites}, {genres}]
  }
}
