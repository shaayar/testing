import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SingerService } from "./singer.service";
import { SingerControllerBase } from "./base/singer.controller.base";

@swagger.ApiTags("singers")
@common.Controller("singers")
export class SingerController extends SingerControllerBase {
  constructor(protected readonly service: SingerService) {
    super(service);
  }
}
