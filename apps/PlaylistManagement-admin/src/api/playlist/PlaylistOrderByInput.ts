import { SortOrder } from "../../util/SortOrder";

export type PlaylistOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
