import * as graphql from "@nestjs/graphql";
import { PlaylistResolverBase } from "./base/playlist.resolver.base";
import { Playlist } from "./base/Playlist";
import { PlaylistService } from "./playlist.service";

@graphql.Resolver(() => Playlist)
export class PlaylistResolver extends PlaylistResolverBase {
  constructor(protected readonly service: PlaylistService) {
    super(service);
  }
}
