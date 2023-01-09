import { Controller,Get,Post,Put,Delete, Res,HttpStatus,Body, Param, NotFoundException,Query } from '@nestjs/common';
import { CreatepalabraDTO } from "./dto/registro.dto";
import { query } from 'express';

import { RegistroService } from "./registro.service";

@Controller('registro')
export class RegistroController {

    constructor(private registroService:RegistroService){} 

    @Post('/')
    async createPost(@Res()res, @Body()createregistroDTO:CreatepalabraDTO){
       const  registro = await this.registroService.createRegistro(createregistroDTO);
        //console.log(createregistroDTO);
        res.status(HttpStatus.OK).json(registro);
    }

    @Get('/')
    async getRegistros (@Res()res ){
        const registro = await this.registroService.getRegistros();
        return res.status(HttpStatus.OK).json(
            registro
        );
    }
    
    @Get('/:registroID')
    async getRegistro(@Res() res,@Param('registroID') registroID  ){
        const registro = await this.registroService.getRegistro(registroID);
        if (!registro) throw new NotFoundException('Registro No existe');
        return res.status(HttpStatus.OK).json(registro);
    }

    @Delete('/:registroID')
    async deleteRegistro (@Res() res, @Param('registroID')registroID ){
        const RegistroDeleted = await this.registroService.deleteRegistro(registroID);
        if (!RegistroDeleted) throw new NotFoundException('Registro No existe');
        return res.status(HttpStatus.OK).json(RegistroDeleted);
    }

    @Put('/:registroID')
    async updaeRegistro(@Res() res, @Body()createregistroDTO:CreatepalabraDTO, @Param('registroID')registroID ){

        const updatedRegistro = await this.registroService.updateRegistro(registroID,createregistroDTO);
        if (!updatedRegistro) throw new NotFoundException('Registro No existe');
        return res.status(HttpStatus.OK).json(updatedRegistro)


    }


}
