import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PLAYLIST_TITLE_FIELD } from "./PlaylistTitle";

export const PlaylistShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User ID" source="userId" />
        <ReferenceManyField
          reference="Track"
          target="playlistId"
          label="Tracks"
        >
          <Datagrid rowClick="show">
            <TextField label="album" source="album" />
            <TextField label="artist" source="artist" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="duration" source="duration" />
            <TextField label="genre" source="genre" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Playlist"
              source="playlist.id"
              reference="Playlist"
            >
              <TextField source={PLAYLIST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Singers" source="singers" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="url" source="url" />
            <TextField label="User ID" source="userId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
