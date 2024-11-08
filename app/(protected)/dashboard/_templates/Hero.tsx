"use client";

import { useAuthSession } from "@/app/_lib/client/hooks/useAuthSession";

export const HeroTemplate = () => {
  const { data: authData, isPending } = useAuthSession();

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <section className="my-4">
      <code>{JSON.stringify(authData, null, 2)}</code>
    </section>
  );
};
