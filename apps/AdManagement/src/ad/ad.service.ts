import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdServiceBase } from "./base/ad.service.base";

@Injectable()
export class AdService extends AdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
