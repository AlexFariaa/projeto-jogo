import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsPositive, IsString, IsUUID, isUUID, Matches, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @ApiProperty({
        description: 'Nome do usuario',
        example: "Alex Faria" 
    })
    name: string;

    @IsString()
    @ApiProperty({
        description: 'Email do usuario',
        example: "alexcaras1@hotmail.com"
    })
    email: string;

    @IsString()
    @MinLength(6)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
    @ApiProperty({
        description: "Senha do usuario",
        example: "Abcd@1234"
    })
    password: string;
    
    @ApiProperty({
        description: "Confirmação de senha deve ser igual",
        example: "Abcd@1234"
    })
    confirmPassword: string;

    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: "CPF para cadastro do usario",
        example: "99999999931"
    })
    cpf: number;

    @IsBoolean()
    @ApiProperty({
        description: "Validação de admin",
        example: "true"
    })
    isAdmin: boolean;
}
