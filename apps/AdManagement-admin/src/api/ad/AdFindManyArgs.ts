import { AdWhereInput } from "./AdWhereInput";
import { AdOrderByInput } from "./AdOrderByInput";

export type AdFindManyArgs = {
  where?: AdWhereInput;
  orderBy?: Array<AdOrderByInput>;
  skip?: number;
  take?: number;
};
