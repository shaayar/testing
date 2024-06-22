import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SingerServiceBase } from "./base/singer.service.base";

@Injectable()
export class SingerService extends SingerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
