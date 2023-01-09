import { Module } from '@nestjs/common';
import { SegerenciasService } from './segerencias.service';
import { SegerenciasController } from './segerencias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EsquemaSegerencia, Segerencia } from './entities/segerencia.entity';

@Module({
  controllers: [SegerenciasController],
  providers: [SegerenciasService],
  imports:[
    MongooseModule.forFeature([{
      name: Segerencia.name,
      schema: EsquemaSegerencia
    }])
    ]
})
export class SegerenciasModule {}
