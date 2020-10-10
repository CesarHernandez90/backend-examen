import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Products')
    .setDescription('Descripción')
    .setVersion('1.0')
    .addTag('products')
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      displayRequestDuration: true,
    },
  });

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  app.enableCors();
  await app.listen(port);
}
bootstrap();
