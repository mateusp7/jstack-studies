import type { FormData } from "@/App";
import { StepHeader } from "@/components/StepHeader";
import {
  StepperFooter,
  StepperNextButton,
  StepperPreviousButton,
} from "@/components/Stepper";
import { useStepper } from "@/components/Stepper/useStepper";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useFormContext } from "react-hook-form";

export const PersonalDataStep = () => {
  const form = useFormContext<FormData>();
  const { nextStep } = useStepper();

  async function handleNextStep() {
    const isValid = await form.trigger("personalDataStep");

    if (isValid) {
      nextStep();
    }
  }

  return (
    <div>
      <StepHeader
        title="Dados Pessoais"
        description="Conte-nos mais sobre você."
      />
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Primeiro Nome</Label>
          <Input
            id="firstName"
            {...form.register("personalDataStep.firstName")}
          />
          {form.formState.errors.personalDataStep?.firstName?.message && (
            <small className="text-destructive">
              {form.formState.errors.personalDataStep?.firstName?.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Sobrenome</Label>
          <Input
            id="lastName"
            {...form.register("personalDataStep.lastName")}
          />
          {form.formState.errors?.personalDataStep?.lastName?.message && (
            <small className="text-destructive">
              {form.formState.errors?.personalDataStep?.lastName.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="document">CPF</Label>
          <Input
            id="document"
            {...form.register("personalDataStep.document")}
          />
          {form.formState.errors?.personalDataStep?.document?.message && (
            <small className="text-destructive">
              {form.formState.errors?.personalDataStep?.document.message}
            </small>
          )}
        </div>
      </div>
      <StepperFooter>
        <StepperPreviousButton  />
        <StepperNextButton onClick={handleNextStep}/>
      </StepperFooter>
    </div>
  );
};
