"use client";
import { colors } from "@/theme/colors";
import { navigationLinks } from "@/utils/headerLinks";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";

const Footer = () => {
  const [isClientDesktop, setIsClientDesktop] = useState(false);

  useEffect(() => {
    setIsClientDesktop(isDesktop);
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: colors.chinaRose,
        padding: isClientDesktop ? "80px 64px" : "48px 16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `1px solid ${colors.tertiary}`,
          paddingBottom: "80px",
          flexDirection: isClientDesktop ? "row" : "column",
        }}
      >
        <Image
          src="/footerCompanyLogo.svg"
          width={126}
          height={40}
          alt="logo julia"
        />
        <List
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: isClientDesktop ? "row" : "column",
            alignItems: isClientDesktop ? "flex-start" : "center",
          }}
        >
          {navigationLinks.map((item, i) => (
            <Link style={{ textDecoration: "none" }} key={i} href={item.link}>
              <ListItem sx={{ whiteSpace: "nowrap" }}>
                <ListItemText>
                  <Typography variant="body2" color={colors.white}>
                    {item.name}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
        <Box sx={{ display: "flex", gap: 1 }}>
          <a
            href="https://www.facebook.com/julia_naturodiet/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/facebookWhite.svg"
              width={24}
              height={24}
              alt="logo facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/julia_naturodiet/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/instagramWhite.svg"
              width={24}
              height={24}
              alt="logo instagram"
            />
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "32px",
        }}
      >
        <Typography variant="body2" color={colors.white}>
          © 2024 Julia Naturodiet. Tous droits réservés.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
