import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AdEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="name" source="name" />
        <TextInput label="voiceAdUrl" source="voiceAdUrl" />
      </SimpleForm>
    </Edit>
  );
};
