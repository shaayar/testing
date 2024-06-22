import { AdWhereInput } from "./AdWhereInput";

export type AdListRelationFilter = {
  every?: AdWhereInput;
  some?: AdWhereInput;
  none?: AdWhereInput;
};
