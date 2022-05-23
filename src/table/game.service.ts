import { Injectable } from "@nestjs/common";
import { CreateGameDto } from "./dto/create-game.dto";
import { game } from "./entities/game.entities";

@Injectable()
export class GameService {
    games: game[] = []

    findAll() {
        return this.games
    }

    create(createGameDto: CreateGameDto) {
        const game: game = {id: 'random_id', ...createGameDto};

        this.games.push(game);

        return game
    }
}