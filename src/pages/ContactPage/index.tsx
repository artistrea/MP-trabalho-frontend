import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { z } from "zod";
import dealWithZodError from "../../api/utils/dealWithZodError";
import sendContactMessage from "../../api/utils/sendContactMessage";
import Input from "../../components/Input";
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

    const handleTextAreaChange: ChangeEventHandler<HTMLTextAreaElement> = (
        e
    ) => {
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
                        <Input
                            type="text"
                            id="name"
                            placeholder="Nome"
                            width={"90%"}
                            onChange={handleChange}
                        />
                        <Input
                            type="email"
                            id="email"
                            width={"90%"}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </div>
                    <Input
                        textarea
                        style={{ maxHeight: "30rem", minHeight: "10rem" }}
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

