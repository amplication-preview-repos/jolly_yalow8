import { MessageCreateNestedManyWithoutChannelsInput } from "./MessageCreateNestedManyWithoutChannelsInput";

export type ChannelCreateInput = {
  name?: string | null;
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutChannelsInput;
};
