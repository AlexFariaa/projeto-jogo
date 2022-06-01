import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateGameDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Cria um novo jogo',
    example: 
      {
        "number": 1, 
        "title": "Teste",
        "coverImageUrl": "Teste.com",
        "description": "É um teste",
        "Year": 2022,
        "imdbScrore": 5,
        "trailerYouTubeUrl": "Trailer teste",
        "gameplayYouTubeUrl": "Teste testando"
      }
  })

  number: number;
  title: string;
  coverImageUrl: string;
  description: string;
  Year: number;
  imdbScrore: number;
  trailerYouTubeUrl: string;
  gameplayYouTubeUrl: string;
}