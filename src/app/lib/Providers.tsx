"use client";

import { SessionProvider } from "next-auth/react";
import StyledComponentsRegistry from "./AntdRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </SessionProvider>
  );
};

export default Providers;
