import { getCourse } from "@/app/_lib/server/actions/getCourse";

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  await getCourse(params?.slug);

  return children;
}
