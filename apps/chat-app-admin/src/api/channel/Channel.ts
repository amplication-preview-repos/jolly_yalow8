import { Message } from "../message/Message";

export type Channel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  messages?: Array<Message>;
};
