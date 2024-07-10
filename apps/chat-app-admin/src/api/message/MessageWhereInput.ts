import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  sentAt?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  channel?: ChannelWhereUniqueInput;
};
