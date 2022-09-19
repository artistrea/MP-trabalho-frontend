import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { z } from "zod";
import dealWithZodError from "../../api/utils/dealWithZodError";
import sendContactMessage from "../../api/utils/sendContactMessage";
import useMessagesIndex from "../../api/utils/useContactUsIndex";
import Input from "../../components/Input";
import "./style.scss";

export const ContactPage: FC = () => {
    const [messageInfo, setMessageInfo] = useState({
        email: "",
        name: "",
        message: "",
    });

    const messages = useMessagesIndex();

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
            <img
                className="contact-page__img"
                src="https://images.unsplash.com/photo-1601599967100-f16100982063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvemVuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <section>
                <h1>Fale conosco</h1>
                <p>Coloque aqui sua reclamação, sugestão ou avaliação</p>
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
                {messages && <h2>Mensagens:</h2>}
                <ul
                    style={{
                        listStyle: "none",
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "3rem",
                    }}
                >
                    {messages?.map((m) => (
                        <li style={{ marginBlock: "2rem" }}>
                            <h3
                                style={{
                                    fontWeight: 500,
                                }}
                            >
                                Por: {m.name || "Anônimo"}
                            </h3>
                            <small>{m.email}</small> <br />
                            Mensagem: <br />
                            <textarea disabled value={m.message}></textarea>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

