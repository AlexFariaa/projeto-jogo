import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateGenderDto {
    @IsString()
    @ApiProperty({
        description: 'Cria um novo genero',
        example: "Ação"
    })
    name: string;
}
