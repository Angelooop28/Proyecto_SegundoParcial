import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactanoDto } from './dto/create-contactano.dto';
import { UpdateContactanoDto } from './dto/update-contactano.dto';
import { contactanos } from './interfaces/contactanos.interface';

@Injectable()
export class ContactanosService {

  constructor(
    @InjectModel('contactanos')
    private readonly ContactanosModel: Model<contactanos>

  ){

  }

  async create(createContactanoDto: CreateContactanoDto): Promise<contactanos>{
    const contactanos = await  new this.ContactanosModel( createContactanoDto )
    await contactanos.save()
    return contactanos
  }

  findAll() {
    const buscar = this.ContactanosModel.find()
    return buscar;
  }


}
