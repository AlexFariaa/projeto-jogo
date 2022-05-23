import { Controller, Get, Post } from "@nestjs/common";
import { GameService } from "./game.service";

@Controller('Games')
export class GameController {
    constructor(private gameservice: GameService) {}

    @Get()
    findAll(){
        return this.gameservice.findAll();
    }
    @Post()
    create(){
        return this.gameservice.create();
    }
}