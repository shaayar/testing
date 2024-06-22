import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlaylistServiceBase } from "./base/playlist.service.base";

@Injectable()
export class PlaylistService extends PlaylistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
