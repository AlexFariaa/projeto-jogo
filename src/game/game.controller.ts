import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateGameDto } from "./dto/create-game.dto";
import { GameService } from "./game.service";

@ApiTags('games')
@Controller('Games')
export class GameController {
    constructor(private gameservice: GameService) {}

    @Get()
    findAll(){
        return this.gameservice.findAll();
    }
    @Post()
    create(@Body() createGameDto: CreateGameDto){
        return this.gameservice.create(createGameDto);
    }
}