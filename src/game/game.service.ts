import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGameDto } from "./dto/create-game.dto";
import { game } from "./entities/game.entities";

@Injectable()
export class GameService {
    constructor(private readonly prisma: PrismaService){}

    findAll(): Promise <game[]> {
        return this.prisma.game.findMany()
    }

    findOne(id: string): Promise<game> {
        return this.prisma.game.findUnique({
            where: {id}
        })
    }

    create(dto: CreateGameDto): Promise <game> {
        const data: game = {...dto};

        return this.prisma.game.create({
            data
        })

        
    }
}