import { AdWhereUniqueInput } from "./AdWhereUniqueInput";
import { AdUpdateInput } from "./AdUpdateInput";

export type UpdateAdArgs = {
  where: AdWhereUniqueInput;
  data: AdUpdateInput;
};
