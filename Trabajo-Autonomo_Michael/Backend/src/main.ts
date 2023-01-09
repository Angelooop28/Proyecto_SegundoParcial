import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.enableCors();

  const options= new DocumentBuilder()
  .setTitle('REGISTRO_IDIOMA')
  .setDescription('REGISTRO DE  IDIOMA , PALABRA , REGISTRO')
  .setVersion('1.0')
  .addTag('REGISTRO_IDIOMA')
  .build();

const document = SwaggerModule.createDocument(app,options);
SwaggerModule.setup('api/docs',app,document)

  await app.listen(process.env .PORT ||5000);
}
bootstrap();
