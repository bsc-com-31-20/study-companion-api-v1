import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RolesGuard } from './Guards/roles.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  app.useGlobalInterceptors(new LoggingInterceptor());
  //app.useGlobalGuards(new RolesGuard());


  const config = new DocumentBuilder()
    .setTitle('Study-Companion Web App')
    .setDescription('The Study-companion API description')
    .setVersion('2.10.43v1a1')
    .addTag('Endpoints')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
  await app.listen(port);
}
bootstrap();
