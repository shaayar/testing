import { Module } from "@nestjs/common";
import { AdModuleBase } from "./base/ad.module.base";
import { AdService } from "./ad.service";
import { AdController } from "./ad.controller";
import { AdResolver } from "./ad.resolver";

@Module({
  imports: [AdModuleBase],
  controllers: [AdController],
  providers: [AdService, AdResolver],
  exports: [AdService],
})
export class AdModule {}
