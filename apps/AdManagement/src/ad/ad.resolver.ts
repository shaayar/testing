import * as graphql from "@nestjs/graphql";
import { AdResolverBase } from "./base/ad.resolver.base";
import { Ad } from "./base/Ad";
import { AdService } from "./ad.service";

@graphql.Resolver(() => Ad)
export class AdResolver extends AdResolverBase {
  constructor(protected readonly service: AdService) {
    super(service);
  }
}
