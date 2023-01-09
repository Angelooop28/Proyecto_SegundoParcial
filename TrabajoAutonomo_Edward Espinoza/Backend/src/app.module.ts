import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoModule } from './concepto/concepto.module';
import { GastoclienteModule } from './gastocliente/gastocliente.module';
import { ContactanosModule } from './contactanos/contactanos.module';

@Module({
  imports: [ClienteModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI), ConceptoModule, GastoclienteModule, ContactanosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

