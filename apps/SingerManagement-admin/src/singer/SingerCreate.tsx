import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SingerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="photoUrl" source="photoUrl" />
        <TextInput label="Track ID" source="trackId" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
