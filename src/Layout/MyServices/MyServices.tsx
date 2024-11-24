import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import ServicesDetails from "./ServicesDetails";

const MyServices = () => {
  const [isDesktopDevice, setIsDesktopDevice] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsDesktopDevice(isDesktop);
  }, []);
  return (
    <Box
      sx={{
        padding: "112px 64px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        position: "relative",
        zIndex: 1,

        "@media (max-width: 768px)": { padding: "112px 16px" },
      }}
    >
      {isDesktopDevice && (
        <Image
          src="/services/Vector.png"
          width={602}
          height={626}
          alt="Vector"
          style={{
            position: "absolute",
            bottom: "160px",
            left: "0",
            zIndex: 0,
          }}
        />
      )}

      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          "@media (max-width: 768px)": { flexDirection: "column" },
        }}
      >
        <Box
          sx={{ flex: "1", display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="body1">Mes différents services</Typography>
          <Box sx={{ flex: "1", marginRight: "32px" }}>
            <Typography variant="h2">
              Rééquilibrez Votre Alimentation pour un Bien-Être Durable
            </Typography>
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
            Atteignez vos objectifs de santé en rééquilibrant votre alimentation
            grâce à un accompagnement personnalisé et bienveillant
          </Typography>
          <Button
            sx={{
              width: isDesktopDevice ? "137px" : "100%",
              whiteSpace: "nowrap",
            }}
            variant="contained"
            color="primary"
            onClick={() => {
              router.push("/myservices");
            }}
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
