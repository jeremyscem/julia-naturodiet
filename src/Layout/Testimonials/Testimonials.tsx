import styled from "@emotion/styled";
import { Box, DialogTitle, IconButton, Typography } from "@mui/material";
import CustomDialog from "common/CustomDialog";
import Image from "next/image";
import { useState } from "react";
import { testimonials } from "staticData/testimonials";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors } from "theme/colors";
import CloseIcon from "../../../public/icons/CloseIcon";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-left: 64px;
  margin-right: -64px;
  margin-left: -64px;
  padding-right: 64px;
  padding-bottom: 102px;

  .swiper-pagination-bullets {
    width: auto;
    left: 64px;
    bottom: 50px;
  }
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: ${colors.black};
  }
  .button-next,
  .button-prev {
    bottom: 24px;
  }
  .button-prev {
    right: 56px;
  }
  .button-next {
    right: 0;
  }

  @media (max-width: 768px) {
    .button-prev {
      right: 115px;
    }
    .button-next {
      right: 50px;
    }
  }
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
  max-width: 416px;
  box-sizing: border-box;
  cursor: pointer;
  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 24px;
  }
`;
const Testimonials = () => {
  const [openTestimonial, setOpenTestimonial] = useState(false);
  const [testimonial, setTestimonial] = useState("");
  return (
    <Box
      sx={{
        padding: "112px 64px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        overflow: "hidden",
        "@media (max-width: 768px)": { padding: "112px 16px" },
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{ flex: "1", display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="body1">Temoignages</Typography>
          <Box sx={{ flex: "1", marginRight: "32px" }}>
            <Typography variant="h2">Des patients satisfaits</Typography>
          </Box>
        </Box>
      </Box>

      <StyledSwiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={{ prevEl: ".button-prev", nextEl: ".button-next" }}
        spaceBetween={32}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item) => (
          <StyledSwiperSlide
            onClick={() => {
              setOpenTestimonial(true);
              setTestimonial(item.text);
            }}
            key={item.id}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: "800",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "normal",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
              }}
            >
              {item.text}
            </Typography>

            <Typography variant="body2" sx={{ fontWeight: "400" }}>
              {item.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "400", textDecoration: "underline" }}
            >
              Témoignage complet
            </Typography>
          </StyledSwiperSlide>
        ))}
        <IconButton className="button-prev" sx={{ position: "absolute" }}>
          <Image
            src="/icons/left.svg"
            width={48}
            height={48}
            alt="prev button"
          />
        </IconButton>
        <IconButton className="button-next" sx={{ position: "absolute" }}>
          <Image
            src="/icons/right.svg"
            width={48}
            height={48}
            alt="prev button"
          />
        </IconButton>
      </StyledSwiper>
      <CustomDialog
        open={openTestimonial}
        onClose={() => {
          setOpenTestimonial(false);
          setTestimonial("");
        }}
      >
        <DialogTitle>Témoignage</DialogTitle>
        <IconButton
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",
            borderRadius: "50%",
            border: `1px solid ${colors.chinaRose}`,
          }}
          onClick={() => {
            setOpenTestimonial(false);
            setTestimonial("");
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ padding: "16px" }}>
          <Typography variant="body1">{testimonial}</Typography>
        </Box>
      </CustomDialog>
    </Box>
  );
};

export default Testimonials;
