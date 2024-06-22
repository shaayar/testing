import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrackListRelationFilter } from "../track/TrackListRelationFilter";

export type PlaylistWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tracks?: TrackListRelationFilter;
  userId?: StringNullableFilter;
};
