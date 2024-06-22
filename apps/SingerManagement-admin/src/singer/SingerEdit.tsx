import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SingerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="photoUrl" source="photoUrl" />
        <TextInput label="Track ID" source="trackId" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
