import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SingerWhereInput = {
  bio?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  photoUrl?: StringNullableFilter;
  trackId?: StringNullableFilter;
  userId?: StringNullableFilter;
};
