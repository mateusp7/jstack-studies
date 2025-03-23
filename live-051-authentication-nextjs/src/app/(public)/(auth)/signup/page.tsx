"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios'
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

const schema = z.object({
  firstName: z.string().min(1, "Informe um nome"),
  lastName: z.string().min(1, "Informe um sobrenome"),
  email: z.string().email("Informe um e-mail válido"),
  password: z.string().min(8, "A senha deve conter pelo menos 8 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function SignIn() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    try {
      setIsLoading(true)
      await axios.post('/api/auth/sign-up', data)
      toast('Conta cadastrada com sucesso!', {
        description: 'Faça login agora mesmo.'
      })
      router.push('/signin')
    } catch {
      toast.error('Erro ao criar a sua conta!')
      setIsLoading(false)
    }
  };

  return (
    <div className={"flex flex-col gap-6"}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Registro</CardTitle>
          <CardDescription>Registre-se com e-mail e senha</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel htmlFor="firstName">Primeiro Nome</FormLabel>
                      <FormControl>
                        <Input className="w-full" id="firstName" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel htmlFor="lastName">Sobrenome</FormLabel>
                      <FormControl>
                        <Input className="w-full" id="lastName" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        autoComplete="current-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="•••••••••••"
                        autoComplete="current-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Criando a sua conta...' : 'Criar conta'}
              </Button>
              <div className="mt-4 text-center text-sm">
                Já tem uma conta?{" "}
                <Link href="/signin" className="underline underline-offset-4">
                  Entre
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
