import { Track as TTrack } from "../api/track/Track";

export const TRACK_TITLE_FIELD = "title";

export const TrackTitle = (record: TTrack): string => {
  return record.title?.toString() || String(record.id);
};
