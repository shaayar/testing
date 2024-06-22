import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlaylistService } from "./playlist.service";
import { PlaylistControllerBase } from "./base/playlist.controller.base";

@swagger.ApiTags("playlists")
@common.Controller("playlists")
export class PlaylistController extends PlaylistControllerBase {
  constructor(protected readonly service: PlaylistService) {
    super(service);
  }
}
