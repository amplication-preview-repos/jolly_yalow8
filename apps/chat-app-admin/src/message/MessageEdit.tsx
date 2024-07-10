import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ChannelTitle } from "../channel/ChannelTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="channel.id" reference="Channel" label="Channel">
          <SelectInput optionText={ChannelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
