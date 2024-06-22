import { TrackUpdateManyWithoutPlaylistsInput } from "./TrackUpdateManyWithoutPlaylistsInput";

export type PlaylistUpdateInput = {
  description?: string | null;
  name?: string | null;
  tracks?: TrackUpdateManyWithoutPlaylistsInput;
  userId?: string | null;
};
