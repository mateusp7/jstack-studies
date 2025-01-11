import { z } from "zod";

export const userCredentialSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(8),
});
