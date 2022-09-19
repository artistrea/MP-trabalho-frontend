import { useEffect, useState } from "react";
import apiGetContactUsIndex from "../requests/contact_us";
import { message, messageSchema } from "../validations/messageInfo";

export default function useMessagesIndex() {
    const [messages, setMessages] = useState<null | message[]>(null);

    useEffect(() => {
        apiGetContactUsIndex().then((res) => {
            const data = messageSchema.strict().array().parse(res.data);
            setMessages(data);
        });
    }, []);

    return messages;
}

