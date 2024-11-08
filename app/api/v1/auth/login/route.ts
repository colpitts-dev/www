//import { auth } from "@/app/server/auth";
import { keystoneContext } from "@/app/server/keystone";

export async function POST(req: Request): Promise<Response> {
  const body = await req.json();
  const session: {
    authenticatePersonWithPassword: {
      sessionToken?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      item?: any;
      message?: string;
    };
  } = await keystoneContext.graphql.run({
    query: `
      mutation Login($email: String!, $password: String!) {
        authenticatePersonWithPassword(email: $email, password: $password) {
            ... on PersonAuthenticationWithPasswordSuccess {
              sessionToken
              item {
                id
                email
                isAdmin
              }
            }
            ... on PersonAuthenticationWithPasswordFailure {
              message
            }
        }
    }`,
    variables: {
      email: body.email,
      password: body.password,
    },
  });

  const token = session?.authenticatePersonWithPassword?.sessionToken;

  if (token) {
    return Response.json(session, { status: 200 });
  }
  return Response.json(
    {
      message:
        session?.authenticatePersonWithPassword?.message || "Unauthorized",
    },
    { status: 401 }
  );
}
