import { Module } from '@nestjs/common';
import { IdiomaController } from './idioma.controller';
import { IdiomaService } from './idioma.service';
import { MongooseModule  } from "@nestjs/mongoose";
import {  IdiomaSchema} from "./schemas/idioma.schema";
@Module({
  imports:[
    MongooseModule.forFeature([
      {name: 'id', schema: IdiomaSchema}
    ])
  ],
  controllers: [IdiomaController],
  providers: [IdiomaService]
})
export class IdiomaModule {}
