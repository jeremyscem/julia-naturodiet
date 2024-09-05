import { colors } from "@/theme/colors";
import { Box, Button, Typography } from "@mui/material";

const BookAnAppointment = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
        padding: "112px 64px",
        backgroundColor: colors.chinaRose,
        borderTopRightRadius: "420px",
        borderBottomRightRadius: "42px",
        borderTopLeftRadius: "42px",
        borderBottomLeftRadius: "420px",
        width: "90%",
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
  );
};

export default BookAnAppointment;
