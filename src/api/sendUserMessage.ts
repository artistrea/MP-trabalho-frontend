type messageInfo = {
  email: string;
  name: string;
  message: string;
};

export default function sendUserMessage(messageInfo: messageInfo) {
  alert(JSON.stringify(messageInfo));
}
