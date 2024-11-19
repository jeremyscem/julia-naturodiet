import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
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
        }}
      >
        <Typography
          color="white"
          variant="h2"
          maxWidth={"650px"}
          textAlign={"center"}
        >
          Take the First Step Towards Better Health
        </Typography>
        <Typography
          color="white"
          variant="body1"
          maxWidth={"768px"}
          textAlign={"center"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse varius enim in eros elementum
          tristique.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.neutral,
            color: "black",
            border: "1px solid black",
            width: "232px",
          }}
        >
          <Typography color="black" variant="body2" fontWeight={700}>
            Book an Appointment
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default BookAnAppointment;
