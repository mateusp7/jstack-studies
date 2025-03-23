import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { AuthProvider } from "@/contexts/auth-context";

export default async function PrivatePages({ children }: React.PropsWithChildren) {
  const user = await auth()

  if (!user) {
    return redirect('/signin')
  }

  return (
    <AuthProvider user={user}>
      {children}
    </AuthProvider>
  );
}
