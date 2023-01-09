import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSegerenciaDto } from './dto/create-segerencia.dto';
import { UpdateSegerenciaDto } from './dto/update-segerencia.dto';
import { Segerencia } from './entities/segerencia.entity';

@Injectable()
export class SegerenciasService {

  constructor(
    @InjectModel(Segerencia.name)
    private readonly SugreneciaModel: Model<Segerencia>

  ){}

  async create(createSegerenciaDto: CreateSegerenciaDto) {
    const segerencia = await this.SugreneciaModel.create( createSegerenciaDto )
    return segerencia;
  }

  findAll() {
    return this.SugreneciaModel.find();
    }

}
