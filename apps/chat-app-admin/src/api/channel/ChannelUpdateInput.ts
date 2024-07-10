import { MessageUpdateManyWithoutChannelsInput } from "./MessageUpdateManyWithoutChannelsInput";

export type ChannelUpdateInput = {
  name?: string | null;
  description?: string | null;
  messages?: MessageUpdateManyWithoutChannelsInput;
};
