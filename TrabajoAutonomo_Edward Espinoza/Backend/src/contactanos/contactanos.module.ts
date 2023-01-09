import { Module } from '@nestjs/common';
import { ContactanosService } from './contactanos.service';
import { ContactanosController } from './contactanos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { contactanosSchema } from './schemas/contactanos.schema';

@Module({
  controllers: [ContactanosController],
  providers: [ContactanosService],
  imports:[MongooseModule.forFeature([
    {
      name: 'contactanos',
      schema: contactanosSchema
    }
  ])]
})
export class ContactanosModule {}
