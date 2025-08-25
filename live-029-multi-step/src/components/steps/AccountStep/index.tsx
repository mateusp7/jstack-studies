import type { FormData } from "@/App";
import { StepHeader } from "@/components/StepHeader";
import { StepperFooter, StepperNextButton } from "@/components/Stepper";
import { useStepper } from "@/components/Stepper/useStepper";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useFormContext } from "react-hook-form";

export const AccountStep = () => {
  const { nextStep } = useStepper();

  const form = useFormContext<FormData>();

  async function handleNextStep() {
    const isValid = await form.trigger("accountStep");

    if (isValid) {
      nextStep();
    }
  }

  return (
    <div>
      <StepHeader
        title="Conta"
        description="Seus dados de acesso à plataforma."
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" {...form.register("accountStep.email")} />
          {form.formState.errors?.accountStep?.email?.message && (
            <small className="text-destructive">
              {form.formState.errors?.accountStep?.email.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            {...form.register("accountStep.password")}
          />
          {form.formState.errors?.accountStep?.password?.message && (
            <small className="text-destructive">
              {form.formState.errors?.accountStep?.password.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton onClick={handleNextStep} />
      </StepperFooter>
    </div>
  );
};
