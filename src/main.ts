import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.APP_PORT || 3000;
  const api = await NestFactory.create(AppModule);

  api.setGlobalPrefix("/api");

  await api.listen(PORT, () => {
    console.log('------------------------------');
    console.log(`Server started at ${PORT} port`);
    console.log('------------------------------');
  });
}
bootstrap();
