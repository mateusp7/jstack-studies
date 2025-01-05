import { ToggleThemeMode } from "@/components/toggle-theme-mode";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 flex-col gap-2">
      <ToggleThemeMode />
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
