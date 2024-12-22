export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/blog`);
  const posts = await response.json();

  return posts["blogData"].map((post: any) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return <h1>{slug}</h1>;
}
