"use client";
import { instagram } from "@/staticData/instagram";
import { colors } from "@/theme/colors";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";

const Instagram = () => {
  const router = useRouter();
  const [isClientDesktop, setIsClientDesktop] = useState(false);

  useEffect(() => {
    setIsClientDesktop(isDesktop);
  }, []);
  return (
    <Box
      sx={{
        padding: isClientDesktop ? "112px 64px" : "112px 16px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: colors.black,
          marginBottom: "8px",
        }}
        href="https://www.instagram.com/julia_naturodiet/"
      >
        #julia_naturodiet
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: "700px",
        }}
        mb={10}
      >
        <Typography variant="h2">On Instagram</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Lorem ipsum dolor sit amet,
          consectetur
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
        {instagram.map((item, i) => (
          <Box
            sx={{
              display: "flex",
              width: "240px",
              height: "300px",
              position: "relative",
            }}
            key={i}
          >
            <Image src={item.imageUrl} alt={item.alt} fill objectFit="cover" />
            <IconButton
              onClick={() => router.push(item.link)}
              sx={{
                position: "absolute",
                top: "16px",
                right: "16px",
                backgroundColor: colors.neutral,
                borderRadius: "100px",
                width: "44px",
                height: "44px",
                "&:hover": {
                  opacity: 0.8,
                  backgroundColor: colors.neutral,
                },
              }}
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Instagram;
