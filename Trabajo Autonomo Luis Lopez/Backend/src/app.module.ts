import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InversionistaModule } from './inversionista/inversionista.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoInversionModule } from './concepto-inversion/concepto-inversion.module';
import { InversionRealizadaModule } from './inversion-realizada/inversion-realizada.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    InversionistaModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB),
    ConceptoInversionModule,
    InversionRealizadaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
