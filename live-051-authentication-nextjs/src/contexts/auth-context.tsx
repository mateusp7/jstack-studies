"use client";

import { User } from "@/entities/User";
import { createContext, PropsWithChildren } from "react";

interface IAuthContextValue {
  user: User;
}

export const AuthContext = createContext({} as IAuthContextValue);

interface IAuthProviderProps extends PropsWithChildren {
  user: User;
}

export const AuthProvider = ({ children, user }: IAuthProviderProps) => {
  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
