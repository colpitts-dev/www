import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/app/server/auth";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.getSession();
  if (!session.data) {
    // User is not authenticated
    redirect("/");
  }

  return children;
}
