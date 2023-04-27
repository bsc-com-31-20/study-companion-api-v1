import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //here pasted
  const config = new DocumentBuilder()
    .setTitle('Study-Companion Web App')
    .setDescription('The Study-companion API description')
    .setVersion('1.0.4')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
  await app.listen(3000);
}
bootstrap();
