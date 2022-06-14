import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';
import { LoggedUser } from 'src/auth/logged-user.decorator';

@ApiTags('genders')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo genero'
  })
  create(@LoggedUser() user: User, @Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(user, createGenderDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Procura todos os generos'
  })
  findAll() {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Procura genero por ID'
  })
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza o genero por ID'
  })
  update(@LoggedUser() user: User, @Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(user, id, updateGenderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deleta um genero por ID'
  })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    return this.genderService.delete(user, id);
  }
}
