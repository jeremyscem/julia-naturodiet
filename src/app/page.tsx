import HeroSection from "@/components/Hero/HeroSection";
import MyServices from "@/components/MyServices/MyServices";

// async function getData() {
//   const res = await fetch(process.env.STRAPI_BASE_URL + "/api/home-page");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function Home() {
  // const data = await getData();

  return (
    <main>
      {/* {data?.data.attributes?.description} */}
      <HeroSection />
      <MyServices />
    </main>
  );
}
