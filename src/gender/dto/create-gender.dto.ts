import { ApiProperty } from "@nestjs/swagger";

export class CreateGenderDto {
    @ApiProperty({
        description: "Cria um novo genero",
        example: {
            "name": "Novo genero"
        }
    })
    name: string
}
