import { Track } from "../track/Track";

export type Playlist = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  tracks?: Array<Track>;
  updatedAt: Date;
  userId: string | null;
};
