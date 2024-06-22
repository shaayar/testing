import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type TrackWhereInput = {
  album?: StringNullableFilter;
  artist?: StringNullableFilter;
  duration?: IntNullableFilter;
  genre?: StringNullableFilter;
  id?: StringFilter;
  playlist?: PlaylistWhereUniqueInput;
  singers?: JsonFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
  userId?: StringNullableFilter;
};
