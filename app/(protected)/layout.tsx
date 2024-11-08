import { Header } from "@/app/client/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "colpitts.dev",
  description: "An open source, privacy focused, community engagement platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="p-4">{children}</main>
    </>
  );
}
