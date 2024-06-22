import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrackService } from "./track.service";
import { TrackControllerBase } from "./base/track.controller.base";

@swagger.ApiTags("tracks")
@common.Controller("tracks")
export class TrackController extends TrackControllerBase {
  constructor(protected readonly service: TrackService) {
    super(service);
  }
}
