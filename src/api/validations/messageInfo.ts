import { z } from "zod";

export const messageInfoSchema = z.object({
  email: z.string().email({ message: "Email deve ser válido" }),
  name: z.string().min(1, { message: "Deve ter nome" }),
  message: z.string().min(1, { message: "Deve ter mensagem" }),
});

export type messageInfo = z.infer<typeof messageInfoSchema>;
