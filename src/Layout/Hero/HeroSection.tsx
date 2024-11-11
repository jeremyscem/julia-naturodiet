"use client";

import { Video } from "@/common/Video";
import { colors } from "@/theme/colors";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";

const HeroSection = () => {
  const [isClientDesktop, setIsClientDesktop] = useState(false);

  useEffect(() => {
    setIsClientDesktop(isDesktop);
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image
        src="/companyLogo.svg"
        width={126}
        height={40}
        alt="logo julia naturodiet"
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <Video src="/heroVideo.mov" />
      </Box>
      <Box
        sx={{
          position: isClientDesktop ? "absolute" : "relative",
          top: isClientDesktop ? "20%" : "0",
          left: isClientDesktop ? "10%" : "0",
          borderRadius: "32px",
          padding: isClientDesktop ? "40px" : "24px",
          backgroundColor: colors.neutral,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "flex-start",
          maxWidth: isClientDesktop ? "645px" : "100%",
          width: isClientDesktop ? "fit-content" : "calc(100% - 102px)",
          zIndex: 2,
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.16))",
          overflow: "hidden", // Ensure no overflow in mobile view
        }}
      >
        <Typography
          sx={{ paddingInlineEnd: isClientDesktop ? "56px" : "0" }}
          variant="h1"
        >
          Reclaim Your Vitality with Naturopathic Care
        </Typography>
        <Typography
          sx={{ paddingInlineEnd: isClientDesktop ? "40px" : "0" }}
          variant="body1"
        >
          Julia Scemama&#39;s naturopathic approach addresses the root causes of
          your discomfort, offering personalized treatments that promote healing
          and well-being. Discover a natural path to a healthier, more balanced
          life.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            flexDirection: isClientDesktop ? "row" : "column",
            width: isClientDesktop ? "fit-content" : "100%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ paddingRight: "12px" }}
          >
            Book a Consultation <span style={{ marginLeft: "14px" }}>&gt;</span>
          </Button>
          <Button variant="contained" color="secondary">
            My services
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
