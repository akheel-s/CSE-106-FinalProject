import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(`Studi's REST API`)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const PORT = 4000;
  await app.listen(PORT, () => {
    console.log(
      `\nSERVER RUNNNIG ON PORT ${PORT}:\n\thttp://localhost:${PORT}/api/`,
    );
  });
}
bootstrap();
