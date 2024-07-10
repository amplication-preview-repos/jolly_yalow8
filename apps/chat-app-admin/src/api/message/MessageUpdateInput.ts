import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";

export type MessageUpdateInput = {
  sentAt?: Date | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  channel?: ChannelWhereUniqueInput | null;
};
