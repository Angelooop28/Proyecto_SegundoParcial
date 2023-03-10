import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { 
  DocumentBuilder, 
  SwaggerModule 
} from '@nestjs/swagger';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'view'));
  app.setViewEngine('hbs');
  app.enableCors();
  const config = new DocumentBuilder()
  .setTitle('CAJA_CHICA_API_REST')
  .setDescription('Documentation api rest caja chica proyecto')
  .setVersion('version-1')
  .addTag('Entidades')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('API-REST', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
   );
   
  await app.listen(process.env.PORT);
}
bootstrap();
