import AboutMe from "@/Layout/AboutMe/AboutMe";
import BookAnAppointment from "@/Layout/BookAnAppointment/BookAnAppointment";
import Faq from "@/Layout/Faq/Faq";
import HeroSection from "@/Layout/Hero/HeroSection";
import Instagram from "@/Layout/Instagram/Instagram";
import MyServices from "@/Layout/MyServices/MyServices";
import Testimonials from "@/Layout/Testimonials/Testimonials";
import { colors } from "@/theme/colors";

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
    <main style={{ backgroundColor: colors.neutral }}>
      {/* {data?.data.attributes?.description} */}
      <HeroSection />
      <MyServices />
      <AboutMe />
      <Testimonials />
      <BookAnAppointment />
      <Faq />
      <Instagram />
    </main>
  );
}
