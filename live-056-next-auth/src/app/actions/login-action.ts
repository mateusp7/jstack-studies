"use server";

import { signIn } from "@/lib/auth";
import { userCredentialSchema } from "@/schemas/user-credential.schema";
import { AuthError, CredentialsSignin } from "next-auth";

export async function loginAction(formData: FormData) {

  const { data, success } = userCredentialSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!success) return;

  const { email, password } = data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dash",
    });
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return { error: 'Invalid credentials' }
    }

    if (error instanceof AuthError) {
      return { error: 'Something went wrong. Try again!' }
    }

    throw error;
  }
}
