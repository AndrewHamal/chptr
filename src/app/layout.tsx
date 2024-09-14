import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

export const metadata: Metadata = {
  title: "chptr",
  description: "Generated by create next app",
  icons: {
    icon: 'https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/2c8aaf42-7fae-49da-a0ef-97cd7ef88786/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#fafafa] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
