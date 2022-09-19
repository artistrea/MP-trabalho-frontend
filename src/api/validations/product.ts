import { z } from "zod";

export const productSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(1, { message: "Deve ter nome" }),
    description: z.string().min(1, { message: "Deve ter mensagem" }),
    price_in_cents: z
        .number()
        .min(0, { message: "Deve custar mais do que zero" }),
    quantity_in_stock: z
        .number()
        .min(0, { message: "Deve ter no mínimo zero de estoque" }),
    prep_time_in_minutes: z
        .number()
        .min(0, { message: "Deve demorar no mínimo 0 minutos" }),
    created_at: z.string().optional(),
    updated_at: z.string().optional(),
});

export type product = z.infer<typeof productSchema>;

