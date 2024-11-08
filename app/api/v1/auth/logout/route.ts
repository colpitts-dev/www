import { keystoneContext } from "@/app/server/keystone";

export async function GET(): Promise<Response> {
  await keystoneContext.graphql.run({
    query: `
      mutation Logout {
        endSession
      }`,
  });

  return Response.json(
    {
      message: "Success",
    },
    { status: 200 }
  );
}

export const dynamic = "force-dynamic";
