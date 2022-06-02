import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export class CreateUserDto {
    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: 'Cria um novo usuario',
        example: {
            "name": "New User",
            "email": "email@teste.com",
            "password": "123",
            "cpf": 99900099900,
            "isAdmin": true
        },
    })
    name: string;
    email: string;
    password: string;
    cpf: number;
    isAdmin: string;
}
