import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Box
      sx={{
        padding: "112px 64px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{ flex: "1", display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="body1">À propos de moi</Typography>
          <Box sx={{ flex: "1", marginRight: "32px" }}>
            <Typography variant="h2">À propos de moi</Typography>
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
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          height: "510px",
          boxShadow:
            "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)",
        }}
      >
        <Image
          fill
          src="/aboutMe/background.svg"
          alt="food healthy about me"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default AboutMe;
