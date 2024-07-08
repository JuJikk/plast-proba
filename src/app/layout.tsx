import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skob",
  description: "Твоя онлайн проба",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
            {" "}
            <SignInButton />{" "}
          </SignedOut>{" "}
          <SignedIn>
            {" "}
            <UserButton />{" "}
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
