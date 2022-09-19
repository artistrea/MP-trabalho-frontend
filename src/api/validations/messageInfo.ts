import { z } from "zod";

export const messageSchema = z.object({
    id: z.number().optional(),
    email: z.string().optional(),
    name: z.string().optional(),
    message: z.string().min(1, { message: "Deve ter mensagem" }),
    created_at: z.string().optional(),
    updated_at: z.string().optional(),
});

export const messageInfoSchema = z.object({
    email: z.string().email({ message: "Email deve ser válido" }),
    name: z.string().min(1, { message: "Deve ter nome" }),
    message: z.string().min(1, { message: "Deve ter mensagem" }),
});

export type message = z.infer<typeof messageSchema>;

export type messageInfo = z.infer<typeof messageInfoSchema>;

