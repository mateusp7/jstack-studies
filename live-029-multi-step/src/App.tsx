import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { Stepper } from "./components/Stepper";

import "./index.css";

import { AccountStep } from "./components/steps/AccountStep";
import { personalDataStepSchema } from "./components/steps/PersonalDataStep/schema";
import { accountStepSchema } from "./components/steps/AccountStep/schema";
import { PersonalDataStep } from "./components/steps/PersonalDataStep";
import { addressStepSchema } from "./components/steps/AddressStep/schema";
import { AddressStep } from "./components/steps/AddressStep";

const schema = z.object({
  accountStep: accountStepSchema,
  personalDataStep: personalDataStepSchema,
  addressStep: addressStepSchema,
});

export type FormData = z.infer<typeof schema>;

export function App() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      accountStep: {
        email: "",
        password: "",
      },
      personalDataStep: {
        firstName: "",
        lastName: "",
        document: "",
      },
      addressStep: {
        city: "",
        state: "",
        street: "",
      },
    },
  });

  const handleSubmit = form.handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <form
      className="min-h-screen flex justify-center pt-40"
      onSubmit={handleSubmit}
    >
      <FormProvider {...form}>
        <Stepper
          steps={[
            {
              label: "Conta",
              content: <AccountStep />,
            },
            {
              label: "Dados pessoais",
              content: <PersonalDataStep />,
            },
            {
              label: "Endereço",
              content: <AddressStep />,
            },
          ]}
        />
      </FormProvider>
    </form>
  );
}
