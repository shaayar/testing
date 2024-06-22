import * as graphql from "@nestjs/graphql";
import { TrackResolverBase } from "./base/track.resolver.base";
import { Track } from "./base/Track";
import { TrackService } from "./track.service";

@graphql.Resolver(() => Track)
export class TrackResolver extends TrackResolverBase {
  constructor(protected readonly service: TrackService) {
    super(service);
  }
}
