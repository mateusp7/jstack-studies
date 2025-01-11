import { LoginForm } from "@/components/login-form";
import { signIn } from "@/lib/auth";
import { userCredentialSchema } from "@/schemas/user-credential.schema";
import { AuthError, CredentialsSignin } from "next-auth";

export default function Page() {
  async function loginAction(formData: FormData) {
    "use server";

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

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm loginAction={loginAction} />
      </div>
    </div>
  );
}
