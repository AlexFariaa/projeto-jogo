import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl } from "class-validator";

export class CreateProfileDto {
    @IsString()
    @ApiProperty({
        description: 'Nome do perfil',
        example: "AlexF"
    })
    title: string;

    @IsUrl()
    @ApiProperty({
        description: "Foto de perfil",
        example: "https://avatars.githubusercontent.com/u/97993854?v=4"
    })
    imageUrl: string;
}