import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcryptjs";
import { userCredentialSchema } from "@/schemas/user-credential.schema";

export const { auth, signIn, signOut, handlers } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        // Fazemos uma requisição para uma API, implementamos do jeito que quisermos
        // Como no caso do Bodegamix, vamos fazer uma requisição para o backend que usa GraphQL
        // A regra é, retornar NULL quando o usuário não for autenticado e retornar um objeto USER se for autenticado
        const { success, data } = userCredentialSchema.safeParse(credentials);

        if (!success) return null;

        const { email, password } = data;

        const user = await db.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) return null;

        const isPasswordValid = await compare(password, user.password);

        if (!isPasswordValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
});
