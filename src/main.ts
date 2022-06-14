import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      cors: true,
    });
  
  // validation
  app.useGlobalPipes(new ValidationPipe());

  //swagger
  const config = new DocumentBuilder()
  .setTitle('GameBuster')
  .setDescription('Aplicação para gestão de jogos')
  .setVersion('1.0.0')
  .addTag('status')
  .addTag('auth')
  .addTag('games')
  .addTag('users')
  .addTag('profiles')
  .addTag('genders')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3333);
}

bootstrap();
