import { Stepper } from "./components/Stepper";
import { AccountStep } from "./components/steps/AccountStep";
import { AddressStep } from "./components/steps/AddressStep";
import { PersonalDataStep } from "./components/steps/PersonalDataStep";
import "./index.css";

export function App() {
  return (
    <div className="min-h-screen flex justify-center pt-40">
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
    </div>
  );
}
