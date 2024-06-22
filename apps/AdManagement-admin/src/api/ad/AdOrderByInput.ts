import { SortOrder } from "../../util/SortOrder";

export type AdOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  voiceAdUrl?: SortOrder;
};
