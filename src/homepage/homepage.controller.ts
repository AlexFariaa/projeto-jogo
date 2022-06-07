import { Controller, Get, Param} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HomepageService } from './homepage.service';

@ApiTags('homepage')
@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get()
  @ApiOperation({
    summary: "Mostra todos os jogos"
  })
  findAll() {
    return this.homepageService.findAll();
  }

  @ApiOperation({
    summary: "Jogos por genero"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homepageService.findOne(id);
  }

}
