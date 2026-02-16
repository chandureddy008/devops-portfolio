import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandra Sekhar Reddy | DevOps Engineer",
  description: "DevOps Engineer & Infrastructure Architect specializing in AWS, Kubernetes, and CI/CD automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
