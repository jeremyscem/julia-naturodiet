import { Box, List, ListItem } from "@mui/material";
import { useAppContext } from "common/AppContext";
import Link from "next/link";
import { colors } from "theme/colors";
import { navigationLinks } from "utils/headerLinks";

const MobileMenu = () => {
  const { setDrawerOpen } = useAppContext();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        paddingTop: "24px",
      }}
    >
      <List
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "24px",
          flexDirection: "column",
          paddingLeft: "4px",
          paddingBottom: "32px",
          width: "100%",
        }}
      >
        {navigationLinks.map((link, index) => (
          <Link
            onClick={() => setDrawerOpen(false)}
            style={{
              color: colors.black,
              textDecoration: "none",
              width: "100%",
            }}
            href={link.link}
            key={index}
          >
            <ListItem sx={{ width: "auto", fontSize: "16px" }}>
              {link.name}
            </ListItem>
          </Link>
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
          fontFamily: "Lora",
          textTransform: "none",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "calc(100% - 40px)",
          padding: 0,
          margin: "0 auto",
        }}
        href="https://wa.me/+972522630384"
      >
        Prendre un rendez-vous
      </Link>
    </Box>
  );
};

export default MobileMenu;
