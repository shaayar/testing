import { SingerWhereInput } from "./SingerWhereInput";
import { SingerOrderByInput } from "./SingerOrderByInput";

export type SingerFindManyArgs = {
  where?: SingerWhereInput;
  orderBy?: Array<SingerOrderByInput>;
  skip?: number;
  take?: number;
};
