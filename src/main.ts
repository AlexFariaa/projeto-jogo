import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // validation
  app.useGlobalPipes(new ValidationPipe());

  //swagger
  const config = new DocumentBuilder()
  .setTitle('GameBuster')
  .setDescription('Aplicação para gestão de jogos')
  .setVersion('1.0.0')
  .addTag('status')
  .addTag('games')
  .addTag('users')
  .addTag('profiles')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}

bootstrap();
