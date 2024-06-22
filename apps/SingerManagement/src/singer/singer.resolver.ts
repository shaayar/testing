import * as graphql from "@nestjs/graphql";
import { SingerResolverBase } from "./base/singer.resolver.base";
import { Singer } from "./base/Singer";
import { SingerService } from "./singer.service";

@graphql.Resolver(() => Singer)
export class SingerResolver extends SingerResolverBase {
  constructor(protected readonly service: SingerService) {
    super(service);
  }
}
