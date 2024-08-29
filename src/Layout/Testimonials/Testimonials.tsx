"use client";
import { testimonials } from "@/staticData/testimonials";
import { colors } from "@/theme/colors";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledSwiper = styled(Swiper)`
  width: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  background-color: ${colors.white};
  border-radius: 40px;
  box-shadow: 0px 12px 16px -4px rgba(0, 0, 0, 0.08),
    0px 4px 6px -2px rgba(0, 0, 0, 0.03);
`;
const Testimonials = () => {
  return (
    <Box
      sx={{
        padding: "112px 64px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{ flex: "1", display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="body1">Temoignages</Typography>
          <Box sx={{ flex: "1", marginRight: "32px" }}>
            <Typography variant="h2">À propos de moi</Typography>
          </Box>
        </Box>
      </Box>

      <StyledSwiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {testimonials.map((item) => (
          <StyledSwiperSlide key={item.id}>
            <Typography variant="body1">{item.text}</Typography>
            <Typography variant="body2">{item.name}</Typography>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </Box>
  );
};

export default Testimonials;
