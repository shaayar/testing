import { TrackWhereInput } from "./TrackWhereInput";
import { TrackOrderByInput } from "./TrackOrderByInput";

export type TrackFindManyArgs = {
  where?: TrackWhereInput;
  orderBy?: Array<TrackOrderByInput>;
  skip?: number;
  take?: number;
};
