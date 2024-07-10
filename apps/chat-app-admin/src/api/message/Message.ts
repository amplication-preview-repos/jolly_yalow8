import { User } from "../user/User";
import { Channel } from "../channel/Channel";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt: Date | null;
  content: string | null;
  user?: User | null;
  channel?: Channel | null;
};
