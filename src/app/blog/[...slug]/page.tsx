// export async function generateStaticParams() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
//   console.log("Base URL:", baseUrl);

//   // Ensure we only fetch from a valid URL
//   if (!baseUrl.startsWith("http")) {
//     throw new Error("Invalid NEXT_PUBLIC_BASE_URL");
//   }

//   const response = await fetch(`${baseUrl}/api/blog`);
//   if (!response.ok) {
//     throw new Error(`Failed to fetch blog data: ${response.statusText}`);
//   }
//   const posts = await response.json();

//   return posts["blogData"].map((post: any) => ({
//     slug: post.slug,
//   }));
// }

// export default function Page({ params }: { params: { slug: string } }) {
//   const { slug } = params;

//   return <h1>{slug}</h1>;
// }
