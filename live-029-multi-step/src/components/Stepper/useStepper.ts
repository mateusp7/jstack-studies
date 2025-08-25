import { useContext } from "react";
import { StepperContext } from "./stepperContext";

export function useStepper() {
  return useContext(StepperContext);
}
