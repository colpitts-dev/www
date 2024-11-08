import Image from "next/image";
import { Login } from "@/app/client/components/Login";
import { auth } from "@/app/server/auth";

export default async function Home() {
  const isAuthenticated = await auth.isAuthenticated();
  return (
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {isAuthenticated ? <h1>Welcome Back</h1> : <Login />}
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-xs text-gray-400">- made with ♥ by colpitts.dev -</p>
      </footer>
    </section>
  );
}
