import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { game } from './entities/game.entities';
import { GameService } from './game.service';

@ApiTags('games')
@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos',
  })
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar jogo por ID',
  })
  findOne(@Param('id') id: string): Promise<game> {
    return this.gameService.findOne(id);
  }

  @Post('create-game')
  @ApiOperation({
    summary: 'Criar um novo jogo',
  })
  create(@Body() dto: CreateGameDto): Promise<game> {
    return this.gameService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um jogo pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGameDto): Promise<game> {
    return this.gameService.update(id,dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um jogo pelo ID'
  })
  delete(@Param('id') id: string){
    this.gameService.delete(id)
  }
}