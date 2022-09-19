import contact_us from "../requests/contact_us";
import { messageInfo, messageInfoSchema } from "../validations/messageInfo";

export default async function sendContactMessage(messageInfo: messageInfo) {
  messageInfoSchema.parse(messageInfo);
  return messageInfo;
  // return contact_us(messageInfo);
}
