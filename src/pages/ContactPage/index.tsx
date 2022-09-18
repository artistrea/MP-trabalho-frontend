import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { z } from "zod";
import dealWithZodError from "../../api/utils/dealWithZodError";
import sendContactMessage from "../../api/utils/sendContactMessage";
import "./style.scss";

export const ContactPage: FC = () => {
  const [messageInfo, setMessageInfo] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMessageInfo({ ...messageInfo, [e.target.id]: e.target.value });
  };

  const handleTextAreaChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessageInfo({ ...messageInfo, [e.target.id]: e.target.value });
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    sendContactMessage(messageInfo)
      .then(alert)
      .catch((er) => {
        if (!dealWithZodError(er)) {
          alert(er);
        }
      });
  };

  return (
    <div className="flex container">
      <img src="https://images.unsplash.com/photo-1601599967100-f16100982063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvemVuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      <section>
        <h1>Fale conosco</h1>
        <form onSubmit={handleSubmit}>
          <div className="top-inputs">
            <input
              type="text"
              id="name"
              placeholder="Nome"
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <textarea
            rows={8}
            id="message"
            placeholder="Escreva sua mensagem"
            onChange={handleTextAreaChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};
