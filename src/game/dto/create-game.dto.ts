import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateGameDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Cria um novo jogo',
    example: 
      { 
        "title": "Teste",
        "coverImageUrl": "Teste.com",
        "description": "É um teste",
        "Year": 2022,
        "imdbScrore": 5,
        "trailerYouTubeUrl": "Trailer teste",
        "gameplayYouTubeUrl": "Teste testando"
      }
  })

  title: string;
  coverImageUrl: string;
  description: string;
  Year: number;
  imdbScrore: number;
  trailerYouTubeUrl: string;
  gameplayYouTubeUrl: string;
}