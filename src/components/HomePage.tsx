"use client";

import { useAppContext } from "common/AppContext";
import AboutMe from "Layout/AboutMe/AboutMe";
import BookAnAppointment from "Layout/BookAnAppointment/BookAnAppointment";
import ContactUs from "Layout/ContactUs/ContactUs";
import Faq from "Layout/Faq/Faq";
import HeroSection from "Layout/Hero/HeroSection";
import Instagram from "Layout/Instagram/Instagram";
import MyServices from "Layout/MyServices/MyServices";
import Testimonials from "Layout/Testimonials/Testimonials";
import Footer from "./Footer";

const HomePage = () => {
  const { drawerOpen } = useAppContext();

  return (
    <>
      <HeroSection />
      <MyServices />
      <AboutMe />
      <Testimonials />
      <BookAnAppointment />
      <Faq />
      <Instagram />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
