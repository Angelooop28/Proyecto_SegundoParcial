import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { SegerenciasService } from './segerencias.service';
import { CreateSegerenciaDto } from './dto/create-segerencia.dto';
import { UpdateSegerenciaDto } from './dto/update-segerencia.dto';

@Controller('segerencias')
export class SegerenciasController {
  constructor(private readonly segerenciasService: SegerenciasService) {}

  @Post('/createsugerencia')
  create(@Body() createSegerenciaDto: CreateSegerenciaDto) {
    return this.segerenciasService.create(createSegerenciaDto);
  }

  @Get()
  @Render('segerencias/index.hbs')
  findAll() {
    return this.segerenciasService.findAll();
  }

}
