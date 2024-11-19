import { Box, Button, List, ListItem } from "@mui/material";
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
      <Button
        sx={{ height: "40px", width: "calc(100% - 40px)", margin: "0 auto" }}
        variant="contained"
        color="primary"
      >
        Book a Consultation
      </Button>
    </Box>
  );
};

export default MobileMenu;
