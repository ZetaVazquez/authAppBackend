import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); //ESTO DA PERMISO A PODER LLEGAR AL BACKEND DESDE FUERA A CUALQUIERA QUE SZE REGISTRE.
  //es decir: ahora  no solo los usuarios registrados por default en el backend podrán entrar, asino que los que se registren tambien
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );



  await app.listen(process.env.PORTS || 3000);
}
bootstrap();
