import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import { colors } from "theme/colors";

const BookAnAppointment = () => {
  const [isClientDesktop, setIsClientDesktop] = useState(false);

  useEffect(() => {
    setIsClientDesktop(isDesktop);
  }, []);
  return (
    <Box
      sx={
        isClientDesktop
          ? { position: "relative" }
          : { position: "relative", padding: "0 24px" }
      }
    >
      {isClientDesktop ? (
        <Image
          style={{
            position: "absolute",
            top: "100px",
            left: "-60px",
            zIndex: 1,
          }}
          src="/bookAnAppointment/flower.svg"
          alt="book an appointment"
          width={375}
          height={582}
        />
      ) : (
        <Image
          style={{
            position: "absolute",
            top: "-150px",
            left: "-40px",
            zIndex: 1,
          }}
          src="/bookAnAppointment/flowerMobile.svg"
          alt="book an appointment"
          width={200}
          height={180}
        />
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
          padding: isClientDesktop ? "112px 64px" : "56px 24px 80px 16px",
          backgroundColor: colors.chinaRose,
          borderTopRightRadius: isClientDesktop ? "500px" : "100px",
          borderBottomRightRadius: isClientDesktop ? "16px" : "24px",
          borderTopLeftRadius: isClientDesktop ? "16px" : "24px",
          borderBottomLeftRadius: isClientDesktop ? "500px" : "24px",
          width: isClientDesktop ? "85%" : "auto",
          margin: "0 auto",
          height: isClientDesktop ? "350px" : "auto",
        }}
      >
        <Typography
          color="white"
          variant="h2"
          maxWidth={"850px"}
          textAlign={"center"}
        >
          Reprenez le contrôle de votre alimentation et de votre bien-être !{" "}
        </Typography>
        <Typography
          color="white"
          variant="body1"
          maxWidth={"768px"}
          textAlign={"center"}
        >
          Un coaching personnalisé pour manger sainement, perdre du poids et
          vous sentir mieux, sans privation ni frustration.
        </Typography>
        <Link
          style={{
            textDecoration: "none",
            paddingRight: "12px",
            backgroundColor: colors.white,
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
          }}
          href="https://wa.me/+972522630384"
        >
          <Typography color="black" variant="body2" fontWeight={700}>
            Prendre rendez-vous
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default BookAnAppointment;
