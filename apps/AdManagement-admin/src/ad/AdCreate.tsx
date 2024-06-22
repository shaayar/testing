import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AdCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="name" source="name" />
        <TextInput label="voiceAdUrl" source="voiceAdUrl" />
      </SimpleForm>
    </Create>
  );
};
