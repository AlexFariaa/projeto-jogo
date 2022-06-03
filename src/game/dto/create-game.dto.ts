import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'Cria um novo jogo',
    example: "Call Of Duty"
  })
  title: string;

  @IsUrl()
  @IsString()
  @ApiProperty({
    description: 'Imagem do jogo',
    example: "https://gamesadeh.com.br/wp-content/uploads/2022/03/WZ-Season-Three-Announce-TOUT.jpg"
  })
  coverImageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo',
    example: "Jogo de guerra"
  })
  description: string;

  @IsNumber()
  @ApiProperty({
    description: 'Ano de lançamento',
    example: 2020
  })
  Year: number;

  @IsNumber()
  @ApiProperty({
    description: 'Nota do IMDB',
    example: 4
  })
  imdbScrore: number;

  @IsUrl()
  @IsString()
  @ApiProperty({
    description: 'Trailer do jogo',
    example: "https://www.youtube.com/watch?v=aTS9n_m7TW0"
  })
  trailerYouTubeUrl: string;

  @IsUrl()
  @IsString()
  @ApiProperty({
    description: "Gameplay",
    example: "https://www.youtube.com/watch?v=7VUJK4px9b0"
  })
  gameplayYouTubeUrl: string;
}