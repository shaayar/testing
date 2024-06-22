import { SortOrder } from "../../util/SortOrder";

export type TrackOrderByInput = {
  album?: SortOrder;
  artist?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  playlistId?: SortOrder;
  singers?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
};
