import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import "./globals.css";
import { auth } from "@/lib/auth";



export const metadata: Metadata = {
  title: "Live - 056 - Auth Js",
  description: "Authentication with Auth Js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
