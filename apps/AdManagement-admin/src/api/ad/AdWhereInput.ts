import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdWhereInput = {
  content?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  voiceAdUrl?: StringNullableFilter;
};
