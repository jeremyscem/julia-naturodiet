"use client";

import { AppBar, Box, IconButton, List, ListItem } from "@mui/material";
import { useAppContext } from "common/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { colors } from "theme/colors";
import { navigationLinks } from "utils/headerLinks";

const Header = () => {
  const { setDrawerOpen, drawerOpen } = useAppContext();
  const router = useRouter();
  return (
    <AppBar
      sx={{
        backgroundColor: colors.neutral,
        height: "72px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",

        "@media (max-width: 768px)": {
          height: "64px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 64px",

          "@media (max-width: 768px)": {
            padding: "0 12px 0 20px",
          },
        }}
      >
        <IconButton onClick={() => router.push("/")}>
          <Image
            src="/companyLogo.svg"
            width={126}
            height={40}
            alt="logo julia naturodiet"
          />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              marginRight: "16px",
            }}
          >
            {navigationLinks.map((link, index) => (
              <ListItem sx={{ width: "auto", fontSize: "16px" }} key={index}>
                <Link
                  style={{ color: colors.black, textDecoration: "none" }}
                  href={link.link}
                >
                  {link.name}
                </Link>
              </ListItem>
            ))}
          </List>
          <Link
            style={{
              textDecoration: "none",
              paddingRight: "12px",
              backgroundColor: colors.black,
              color: colors.white,
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
              justifyContent: "center",
            }}
            href="tel:+972522630384"
          >
            Prendre un rendez-vous
          </Link>
        </Box>
        <IconButton
          onClick={() => setDrawerOpen((prevState) => !prevState)}
          sx={{
            borderRadius: "8px",
            backgroundColor: colors.chinaRose,
            width: "48px",
            height: "48px",
            ":hover": { backgroundColor: colors.chinaRose },
            "@media (min-width: 768px)": { display: "none" },
          }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
        >
          <Image
            src={drawerOpen ? "/icons/close.svg" : "/icons/menu.svg"}
            width={drawerOpen ? 48 : 24}
            height={drawerOpen ? 48 : 24}
            alt="menu"
          />
        </IconButton>
      </Box>
    </AppBar>
  );
};

export default Header;
