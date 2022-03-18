import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

export let nestApplication: INestApplication;

async function bootstrap(): Promise<void> {
  nestApplication = await NestFactory.create(AppModule, {
    cors: {
      origin: ["http://localhost:3000"],
    },
    bodyParser: false,
  });

  await nestApplication.listen(process.env.PORT || 8000);
}

bootstrap();
