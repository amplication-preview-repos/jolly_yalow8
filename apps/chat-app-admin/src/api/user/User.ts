import { JsonValue } from "type-fest";
import { Message } from "../message/Message";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  messages?: Array<Message>;
};
