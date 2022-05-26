import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateGameDto } from "./dto/create-game.dto";
import { GameService } from "./game.service";

@ApiTags('games')
@Controller('Games')
export class GameController {
    constructor(private readonly gameservice: GameService) {}

    @Get()
    findAll(){
        return this.gameservice.findAll();
    }
    @Post()
    create(@Body() dto: CreateGameDto){
        return this.gameservice.create(dto);
    }
}