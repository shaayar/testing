import { Playlist as TPlaylist } from "../api/playlist/Playlist";

export const PLAYLIST_TITLE_FIELD = "name";

export const PlaylistTitle = (record: TPlaylist): string => {
  return record.name?.toString() || String(record.id);
};
