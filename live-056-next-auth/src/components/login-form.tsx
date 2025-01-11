"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useActionState } from "react";
import { Loader2Icon } from "lucide-react";

interface ILoginFormProps extends React.ComponentPropsWithoutRef<"div"> {
  loginAction: (formData: FormData) => Promise<void | { error: string }>;
}

type ActionState = null | void | { error: string };

export function LoginForm({
  className,
  loginAction,
  ...props
}: ILoginFormProps) {
  const [, dispatchAction, isPending] = useActionState<ActionState>(
    async (_previousData: any, formData: FormData) => {
      const response = await loginAction(formData);

      if (response?.error) {
        alert(response.error);
      }
    },
    null
  );

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Entrar</CardTitle>
          <CardDescription>Entre com seu e-mail e senha</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={dispatchAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <Input name="password" id="password" type="password" required />
              </div>
              <Button
                disabled={isPending}
                type="submit"
                className="w-full flex items-center gap-2"
              >
                {isPending && <Loader2Icon className="animate-spin" />}
                Entrar
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Não possui uma conta?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Cadastre-se
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
