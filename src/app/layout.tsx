import "./globals.css";
import type { Metadata } from "next";
import AppFooter from "@/components/view/AppFooter/AppFooter";
import Providers from "@/app/lib/Providers";
import Head from "next/head";

export const metadata: Metadata = {
  title: "ProTechFixers",
  description: "Created by Nur Mohammad",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any"/>
      </Head>
      <body>
        <Providers>
          {children}
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
