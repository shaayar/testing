import { TrackCreateNestedManyWithoutPlaylistsInput } from "./TrackCreateNestedManyWithoutPlaylistsInput";

export type PlaylistCreateInput = {
  description?: string | null;
  name?: string | null;
  tracks?: TrackCreateNestedManyWithoutPlaylistsInput;
  userId?: string | null;
};
