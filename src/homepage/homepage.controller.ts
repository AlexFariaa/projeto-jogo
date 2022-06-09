import { Controller, Get, Param} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HomepageService } from './homepage.service';

@ApiTags('homepage')
@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @ApiOperation({
    summary: "Homepage"
  })
  @Get(':id')
  findByGender(@Param('id') id: string) {
    return this.homepageService.findByGender(id);
  }

}
