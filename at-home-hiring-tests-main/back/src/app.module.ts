import { Module, ModuleMetadata } from "@nestjs/common";
import { ConfigModule, ConfigModuleOptions } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HomeModule } from "./home/home.module";

export const appFactory = (
  cfgOpts?: Omit<ConfigModuleOptions, "isGlobal">
): ModuleMetadata => {
  return {
    imports: [
      ConfigModule.forRoot({ ...cfgOpts, isGlobal: true }),
      TypeOrmModule.forRoot(),
      HomeModule,
    ],
  };
};

@Module(appFactory())
export class AppModule {
  configure(): void {}
}
