import { colors } from "@/theme/colors";
import { Box, Button, Typography } from "@mui/material";
import ServicesDetails from "./ServicesDetails";

const MyServices = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.neutral,
        padding: "112px 64px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ flex: "1" }}>
          <Typography variant="body1">Mes différents services</Typography>
          <Box sx={{ flex: "1", marginRight: "32px" }}>
            <Typography variant="h2">Mes différents services</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Typography variant="body1">
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description{" "}
          </Typography>
          <Button
            sx={{ width: "137px", whiteSpace: "nowrap" }}
            variant="contained"
            color="primary"
          >
            En savoir plus
          </Button>
        </Box>
      </Box>
      <ServicesDetails />
    </Box>
  );
};

export default MyServices;
