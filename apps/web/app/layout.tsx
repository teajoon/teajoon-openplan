import type { Metadata } from "next";

import "./globals.css";
import DefaultLayout from "../components/layouts";

export const metadata: Metadata = {
  title: "Teajoon-Openplan",
  description: "Teajoon-Openplan-work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </body>
    </html>
  );
}
