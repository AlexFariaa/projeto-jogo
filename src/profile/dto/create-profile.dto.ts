import { ApiProperty } from "@nestjs/swagger";

export class CreateProfileDto {
    @ApiProperty({
        description: 'Cria um novo Profile',
        example: {
            "title": "Seu nome",
            "imageUrl": "sua foto png"
        }
    })
    title: string;
    imageUrl: string;
}