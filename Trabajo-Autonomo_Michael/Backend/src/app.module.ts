import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdiomaModule } from './idioma/idioma.module';
import { MongooseModule } from "@nestjs/mongoose";
import { PalabraModule } from './palabra/palabra.module';
import { RegistroModule } from './registro/registro.module';
import { ContactanosModule } from './contactanos/contactanos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [IdiomaModule, 
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB), PalabraModule, RegistroModule, ContactanosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
