"use client";

import { Video } from "@/common/Video";
import { colors } from "@/theme/colors";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
      <Image
        src="/companyLogo.svg"
        width={126}
        height={40}
        alt="logo julia naturodiet"
      />
      <Video src="/heroVideo.mov" />
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          borderRadius: "32px",
          padding: "40px",
          backgroundColor: colors.neutral,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "flex-start",
          maxWidth: "645px",
          zIndex: 1,
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.16))",
        }}
      >
        <Typography sx={{ paddingInlineEnd: "56px" }} variant="h1">
          Reclaim Your Vitality with Naturopathic Care
        </Typography>
        <Typography sx={{ paddingInlineEnd: "40px" }} variant="body1">
          Julia Scemama&#39;s naturopathic approach addresses the root causes of
          your discomfort, offering personalized treatments that promote healing
          and well-being. Discover a natural path to a healthier, more balanced
          life.
        </Typography>
        <Box sx={{ display: "flex", gap: "16px" }}>
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