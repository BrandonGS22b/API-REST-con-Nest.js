import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v1");//esta es la url para validarla en el postman la ruta
  //para validar en el postman
  //levantamos el proyecto con el comando yarn run start
  //luego en el postman ponemos en la url http://localhost:3000/api/v1/cats
  //y en el body ponemos un json con el nombre y la edad de la mascota

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  await app.listen(3000);
}
bootstrap();
