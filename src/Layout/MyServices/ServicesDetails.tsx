"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import { services } from "staticData/services";
import { colors } from "theme/colors";

const ServicesDetails = () => {
  const [isDesktopDevice, setIsDesktopDevice] = useState(false);
  useEffect(() => {
    setIsDesktopDevice(isDesktop);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "40px",
        justifyContent: "space-between",
        position: "relative",

        "@media (max-width: 768px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "640px",
          overflow: "hidden",
          borderRadius: "80px",
          zIndex: 1,
          boxShadow:
            "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)",

          "@media (max-width: 768px)": {
            width: "100%",
            borderRadius: "16px",
          },
        }}
      >
        {isDesktopDevice ? (
          <Image
            style={{
              flexGrow: 1,
            }}
            src={services[0].imageUrl}
            width={640}
            height={360}
            alt={services[0].name}
          />
        ) : (
          <Box sx={{ width: "100%", position: "relative", height: "187px" }}>
            <Image
              style={{
                flexGrow: 1,
              }}
              src={services[0].imageUrl}
              objectFit="cover"
              fill
              alt={services[0].name}
            />
          </Box>
        )}
        <Box
          sx={{
            padding: "48px",
            backgroundColor: colors.white,
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography mb={1} variant="body2">
            {services[0].name}
          </Typography>
          <Typography mb={3} variant="h5">
            {services[0].title}
          </Typography>
          <Typography mb={4} variant="body2" fontWeight={400}>
            {services[0].description}
          </Typography>

          <Typography variant="body1">
            <Link
              style={{ color: colors.black, textDecoration: "none" }}
              href={services[0].url}
            >
              En savoir plus <span style={{ marginLeft: "4px" }}>&gt;</span>
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",

          "@media (max-width: 768px)": {
            width: "100%",
          },
        }}
      >
        {services.slice(1).map((service) => (
          <Box
            sx={{
              display: "flex",
              width: "640px",
              height: isDesktopDevice ? "360px" : "auto",
              backgroundColor: "transparent",
              overflow: "hidden",
              borderRadius: "40px",
              boxShadow:
                "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)",
              "@media (max-width: 768px)": {
                flexDirection: "column-reverse",
                width: "100%",
                borderRadius: "16px",
              },
            }}
            key={service.name}
          >
            <Box
              sx={{
                padding: "24px",
                backgroundColor: colors.white,
                display: "flex",
                width: isDesktopDevice ? "50%" : "auto",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography mb={1} variant="body2">
                {service.name}
              </Typography>
              <Typography mb={1} variant="h5">
                {service.title}
              </Typography>
              <Typography mb={3} variant="body2" fontWeight={400}>
                {service.description}
              </Typography>

              <Typography variant="body1">
                <Link
                  style={{ color: colors.black, textDecoration: "none" }}
                  href={service.url}
                >
                  En savoir plus <span style={{ marginLeft: "4px" }}>&gt;</span>
                </Link>
              </Typography>
            </Box>

            {isDesktopDevice ? (
              <Box sx={{ width: "50%", position: "relative", height: "100%" }}>
                <Image
                  src={service.imageUrl}
                  objectFit="cover"
                  fill
                  alt={service.name}
                />
              </Box>
            ) : (
              <Box
                sx={{ width: "100%", position: "relative", height: "187px" }}
              >
                <Image
                  style={{
                    flexGrow: 1,
                  }}
                  src={service.imageUrl}
                  objectFit="cover"
                  fill
                  alt={service.name}
                />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesDetails;
