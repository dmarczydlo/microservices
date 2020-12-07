import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions, TcpOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('User microservice');

const serviceOptions: TcpOptions = {
  transport: Transport.TCP,
  options: {
    port: +process.env.APP_PORT ?? 3010,
    host: process.env.APP_HOST ?? '0.0.0.0'
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    serviceOptions
  );
  app.listen(() => logger.log(`Microservice User is listening [${process.env.APP_HOST}:${process.env.APP_PORT}]`));
}
bootstrap();