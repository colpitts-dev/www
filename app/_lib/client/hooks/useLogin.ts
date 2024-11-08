import { useQuery } from "@tanstack/react-query";

export const LOGIN_QUERY_KEY = "auth-session.create";

async function authenticateWithPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch("/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
    cache: "no-cache",
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();
  if (json?.authenticatePersonWithPassword?.sessionToken) {
    return json.authenticatePersonWithPassword.item;
  }

  throw new Error(json?.data?.authenticatePersonWithPassword?.message);
}

export const useLogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return useQuery({
    queryKey: [LOGIN_QUERY_KEY, email],
    queryFn: () => authenticateWithPassword({ email, password }),
    retry: false,
    enabled: false,
  });
};
