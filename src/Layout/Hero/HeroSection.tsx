import { Box, Button, Typography } from "@mui/material";
import { Video } from "common/Video";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import { colors } from "theme/colors";

const HeroSection = () => {
  const [isClientDesktop, setIsClientDesktop] = useState(false);
  const router = useRouter();
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
        <Video src="/heroVideo.mp4" />
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
          Équilibrez Votre Corps, Transformez Votre Vie
        </Typography>
        <Typography
          sx={{ paddingInlineEnd: isClientDesktop ? "40px" : "0" }}
          variant="body1"
        >
          Découvrez une approche naturelle et personnalisée pour retrouver votre
          bien-être grâce à une alimentation équilibrée et un accompagnement sur
          mesure
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            flexDirection: isClientDesktop ? "row" : "column",
            width: isClientDesktop ? "fit-content" : "100%",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              paddingRight: "12px",
              backgroundColor: colors.black,
              color: colors.white,
              borderRadius: "12px",
              height: "48px",
              fontSize: "16px",
              fontWeight: "700",
              padding: "0 24px",
              fontFamily: "Lora",
              textTransform: "none",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            href="https://wa.me/+972522630384"
          >
            Prendre rendez-vous <span style={{ marginLeft: "14px" }}>&gt;</span>
          </Link>
          <Button
            onClick={() => {
              router.push("/myservices");
            }}
            variant="contained"
            color="secondary"
          >
            Mes services
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
