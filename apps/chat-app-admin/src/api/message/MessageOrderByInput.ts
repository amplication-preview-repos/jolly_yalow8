import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sentAt?: SortOrder;
  content?: SortOrder;
  userId?: SortOrder;
  channelId?: SortOrder;
};
