import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperNextButton } from "../Stepper";
import { useStepper } from "../Stepper/useStepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { safeSessionStorageGetItem } from "@/lib/utils";
import { useEffect } from "react";


const schema = z.object({
  email: z.email("Informe um e-mail válido"),
  password: z.string().min(1, "Informe a senha"),
});

type FormData = z.infer<typeof schema>;

export const AccountStep = () => {
  const { nextStep } = useStepper();

  const initialValue = safeSessionStorageGetItem<FormData>('account-step')

  const form = useForm<FormData>({
    disabled: !!initialValue,
    resolver: zodResolver(schema),
    defaultValues: {
      email: initialValue?.email || "",
      password: initialValue?.password || "",
    },
  });

  const handleSubmit = form.handleSubmit(async (formData) => {
    if (!initialValue) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      sessionStorage.setItem('account-step', JSON.stringify({
        ...formData,
        password: '*'.repeat(formData.password.length)
      }))
    }
    nextStep();
  });

  useEffect(() => {
    if (form.formState.isDirty) {
      window.onbeforeunload = () => {
        return 'Você tem alterações não salvas. Tem certeza de que deseja sair?'
      }

      return () => {
        window.onbeforeunload = null;
      }
    }
  }, [form.formState.isDirty])

  return (
    <form onSubmit={handleSubmit}>
      <StepHeader
        title="Conta"
        description="Seus dados de acesso à plataforma."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" {...form.register("email")} />
          {form.formState.errors.email?.message && (
            <small className="text-destructive">
              {form.formState.errors.email.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" {...form.register("password")} />
          {form.formState.errors.password?.message && (
            <small className="text-destructive">
              {form.formState.errors.password.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton
          disabled={form.formState.isSubmitting}
          type="submit"
          preventDefault
        />
      </StepperFooter>
    </form>
  );
};
