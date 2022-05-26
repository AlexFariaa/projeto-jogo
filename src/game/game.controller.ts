import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateGameDto } from "./dto/create-game.dto";
import { game } from "./entities/game.entities";
import { GameService } from "./game.service";

@ApiTags('games')
@Controller('Games')
export class GameController {
    constructor(private readonly gameservice: GameService) {}

    @Get()
    @ApiOperation({
        summary: 'Listar todos os jogos'
    })
    findAll(){
        return this.gameservice.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Listar jogo por ID'
    })
    findOne(@Param('id') id: string): Promise<game> {
        return this.gameservice.findOne(id)
    }

    @Post()
    @ApiOperation({
        summary: 'Criar um novo jogo'
    })
    create(@Body() dto: CreateGameDto): Promise<game>{
        return this.gameservice.create(dto);
    }
}