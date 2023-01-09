import { IsString } from "class-validator"

export class CreateSegerenciaDto {

    @IsString()
    CorreoElectronico: string

    @IsString()
    Sugrenecia: string

}
