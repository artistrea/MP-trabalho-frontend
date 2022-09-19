import { api } from "../..";
import { messageInfo } from "../../validations/messageInfo";

export default async function apiContactUs(messageInfo: messageInfo) {
    return api.post("contact_us/create", { contact_message: messageInfo });
}

