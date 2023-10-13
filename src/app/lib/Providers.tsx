"use client";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};

export default Providers;
