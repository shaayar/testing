import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PlaylistTitle } from "../playlist/PlaylistTitle";

export const TrackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="album" source="album" />
        <TextInput label="artist" source="artist" />
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="genre" source="genre" />
        <ReferenceInput
          source="playlist.id"
          reference="Playlist"
          label="Playlist"
        >
          <SelectInput optionText={PlaylistTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="title" source="title" />
        <TextInput label="url" source="url" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
