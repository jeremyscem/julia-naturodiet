import styled from "@emotion/styled";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { instagram } from "staticData/instagram";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors } from "theme/colors";

const StyledSwiper = styled(Swiper)`
  width: calc(100% + 128px);
  margin-left: -64px;
  margin-right: -64px;
  .swiper-wrapper {
    justify-content: center;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 240px;
`;
const Instagram = () => {
  return (
    <Box
      sx={{
        padding: { xs: "112px 16px", md: "112px 64px" },
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: colors.black,
          marginBottom: "8px",
        }}
        href="https://www.instagram.com/julia_naturodiet/"
        target="_blank"
      >
        #julia_naturodiet
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: "850px",
        }}
        mb={10}
      >
        <Typography variant="h2">
          Rejoignez-moi sur Instagram pour des recettes saines et gourmandes !
        </Typography>
        <Typography>
          Des idées simples, des astuces nutrition et des plats savoureux vous
          attendent pour accompagner votre rééquilibrage alimentaire.
        </Typography>
      </Box>
      <StyledSwiper loop={true} slidesPerView="auto">
        {instagram.map((item, i) => (
          <StyledSwiperSlide key={i}>
            <Link
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none", width: "240px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "240px",
                  height: "300px",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  objectFit="cover"
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    backgroundColor: colors.neutral,
                    borderRadius: "100px",
                    width: "44px",
                    height: "44px",
                    "&:hover": {
                      opacity: 0.8,
                      backgroundColor: colors.neutral,
                    },
                  }}
                  aria-label="Instagram"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram Icon"
                    width={24}
                    height={24}
                  />
                </IconButton>
              </Box>
            </Link>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </Box>
  );
};

export default Instagram;
