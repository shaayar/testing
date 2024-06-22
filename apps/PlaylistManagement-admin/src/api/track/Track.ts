import { Playlist } from "../playlist/Playlist";
import { JsonValue } from "type-fest";

export type Track = {
  album: string | null;
  artist: string | null;
  createdAt: Date;
  duration: number | null;
  genre: string | null;
  id: string;
  playlist?: Playlist | null;
  singers: JsonValue;
  title: string | null;
  updatedAt: Date;
  url: string | null;
  userId: string | null;
};
