import { cn } from "@/lib/utils";
import {
  useCallback,
  useState,
  type ComponentProps,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { Button } from "../ui/button";
import { StepperContext } from "./stepperContext";
import { useStepper } from "./useStepper";

export interface IStepperProps {
  initialStep?: number;
  steps: {
    label: string;
    content: ReactNode;
  }[];
}

export const Stepper = ({ steps, initialStep = 0 }: IStepperProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const previousStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1));
  }, [steps]);

  return (
    <StepperContext.Provider value={{ previousStep, nextStep }}>
      <div>
        <ul className="space-x-6">
          {steps?.map((step, index) => {
            return (
              <li
                key={step.label}
                className={cn(
                  "inline-block text-xs px-2 py-1 rounded-md",
                  index === currentStep && "bg-primary text-primary-foreground"
                )}
              >
                {String(index + 1).padStart(2, "0")}. {step.label}
              </li>
            );
          })}
        </ul>

        <div className="mt-10">{steps[currentStep].content}</div>
      </div>
    </StepperContext.Provider>
  );
};

export function StepperFooter({ children }: PropsWithChildren) {
  return <footer className="mt-6 flex justify-end gap-2">{children}</footer>;
}

export function StepperPreviousButton({
  size = "sm",
  variant = "secondary",
  type = "button",
  onClick,
  ...props
}: ComponentProps<typeof Button>) {
  const { previousStep } = useStepper();

  return (
    <Button
      size={size}
      variant={variant}
      type={type}
      onClick={onClick ?? previousStep}
      {...props}
    >
      Anterior
    </Button>
  );
}

export function StepperNextButton({
  size = "sm",
  type = "button",
  onClick,
  ...props
}: ComponentProps<typeof Button>) {
  const { nextStep } = useStepper();

  return (
    <Button
      size={size}
      type={type}
      onClick={onClick ?? nextStep}
      {...props}
    >
      Próximo
    </Button>
  );
}
