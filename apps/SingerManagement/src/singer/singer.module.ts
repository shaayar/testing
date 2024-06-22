import { Module } from "@nestjs/common";
import { SingerModuleBase } from "./base/singer.module.base";
import { SingerService } from "./singer.service";
import { SingerController } from "./singer.controller";
import { SingerResolver } from "./singer.resolver";

@Module({
  imports: [SingerModuleBase],
  controllers: [SingerController],
  providers: [SingerService, SingerResolver],
  exports: [SingerService],
})
export class SingerModule {}
