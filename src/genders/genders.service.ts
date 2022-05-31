import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';

@Injectable()
export class GendersService {
  create(createGenderDto: CreateGenderDto) {
    return 'This action adds a new gender';
  }

  findAll() {
    return `This action returns all genders`;
  }

  findOne(id: string) {
    return `This action returns a #${id} gender`;
  }

  update(id: string, updateGenderDto: UpdateGenderDto) {
    return `This action updates a #${id} gender`;
  }

  delete(id: string) {
    return `This action removes a #${id} gender`;
  }
}