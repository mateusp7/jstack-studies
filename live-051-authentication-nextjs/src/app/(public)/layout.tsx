import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function PublicPages({ children }: PropsWithChildren) {
  const userIsAuthenticated = Boolean(await auth());

  if (userIsAuthenticated) {
    return redirect("/");
  }

  return children;
}
