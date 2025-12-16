import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "El nombre de la empresa es requerido"),
  role: z.string().min(2, "El rol es requerido"),
  challenge: z.enum(
    ["cloud", "finance", "both"],
    {
      errorMap: () => ({ message: "Por favor seleccioná un desafío" }),
    }
  ),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

