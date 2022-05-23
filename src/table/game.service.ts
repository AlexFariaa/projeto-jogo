import { Injectable } from "@nestjs/common";
import { CreateGameDto } from "./dto/create-game.dto";

@Injectable()
export class GameService {
    findAll() {
        return 'Buscar todas os jogos';
    }

    create(createGameDto: CreateGameDto) {
        return 'Criar um novo jogo' + JSON.stringify(createGameDto)
    }
}