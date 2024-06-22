import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdService } from "./ad.service";
import { AdControllerBase } from "./base/ad.controller.base";

@swagger.ApiTags("ads")
@common.Controller("ads")
export class AdController extends AdControllerBase {
  constructor(protected readonly service: AdService) {
    super(service);
  }
}
