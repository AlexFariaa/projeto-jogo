import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('genders')
@Controller('genders')
export class GenderController {
  constructor(private readonly gendersService: GenderService) {}

  @Post()
  @ApiOperation({
    summary: "Criar um novo genero"
  })
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.gendersService.create(createGenderDto);
  }

  @Get()
  @ApiOperation({
    summary: "Ver todos os generos"
  })
  findAll() {
    return this.gendersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Pesquisar os generos pelo ID"
  })
  findOne(@Param('id') id: string) {
    return this.gendersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: "Atualizar o genero pelo ID"
  })
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.gendersService.update(id, updateGenderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: "Deletar o genero pelo ID"
  })
  delete(@Param('id') id: string) {
    return this.gendersService.delete(id);
  }
}
