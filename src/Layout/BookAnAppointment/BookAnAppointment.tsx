import { colors } from "@/theme/colors";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const BookAnAppointment = () => {
  return (
    <Box sx={{ position: "relative" }}>
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
          padding: "112px 64px",
          backgroundColor: colors.chinaRose,
          borderTopRightRadius: "500px",
          borderBottomRightRadius: "16px",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "500px",
          width: "85%",
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
