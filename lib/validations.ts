import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  company: z.string().optional(),
  role: z.string().optional(),
  challenge: z.enum(
    ["", "finops", "finance", "tax", "healthcare", "quantum", "custom", "other"],
  ).optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
