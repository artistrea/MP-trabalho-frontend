import apiContactUs from "../requests/contact_us/create";
import { messageInfo, messageInfoSchema } from "../validations/messageInfo";

export default async function sendContactMessage(messageInfo: messageInfo) {
    messageInfoSchema.parse(messageInfo);
    return apiContactUs(messageInfo);
}

