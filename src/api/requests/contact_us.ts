import { api } from "..";
import { messageInfo } from "../validations/messageInfo";

export default async function contact_us(messageInfo: messageInfo) {
  return await api.post("contact_us", { message: messageInfo });
}
