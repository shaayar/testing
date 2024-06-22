import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TrackUpdateInput = {
  album?: string | null;
  artist?: string | null;
  duration?: number | null;
  genre?: string | null;
  playlist?: PlaylistWhereUniqueInput | null;
  singers?: InputJsonValue;
  title?: string | null;
  url?: string | null;
  userId?: string | null;
};
