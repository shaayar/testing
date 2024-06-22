import { PlaylistWhereInput } from "./PlaylistWhereInput";
import { PlaylistOrderByInput } from "./PlaylistOrderByInput";

export type PlaylistFindManyArgs = {
  where?: PlaylistWhereInput;
  orderBy?: Array<PlaylistOrderByInput>;
  skip?: number;
  take?: number;
};
