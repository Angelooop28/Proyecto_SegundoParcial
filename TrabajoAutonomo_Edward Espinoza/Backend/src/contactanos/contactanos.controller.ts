import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Res, HttpStatus } from '@nestjs/common';
import { ContactanosService } from './contactanos.service';
import { CreateContactanoDto } from './dto/create-contactano.dto';
import { UpdateContactanoDto } from './dto/update-contactano.dto';

@Controller('contactanos')
export class ContactanosController {
  constructor(private readonly contactanosService: ContactanosService) {}

  @Post('/create')
  @Render('')
  create(@Res() res, @Body() createContactanoDto: CreateContactanoDto) {
    const contactanos =  this.contactanosService.create(createContactanoDto);
    return res.status(HttpStatus.OK).json({
      message: "concepto Successfuly create",
      contactanos
  });
  }

  @Get()
  @Render('contactanos/index.hbs')
  findAll() {
    return this.contactanosService.findAll();
  }


}
