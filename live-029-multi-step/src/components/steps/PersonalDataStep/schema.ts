import z from "zod";

export const personalDataStepSchema = z.object({
  firstName: z.string().min(1, "Informe o primeiro nome"),
  lastName: z.string().min(1, "Informe o sobrenome"),
  document: z.string().min(1, "Informe o CPF"),
});
