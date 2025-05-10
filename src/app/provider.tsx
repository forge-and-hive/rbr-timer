"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

type Props = {
  children?: React.ReactNode;
};

export const Provider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};
