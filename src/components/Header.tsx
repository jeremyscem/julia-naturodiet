import { colors } from "@/theme/colors";
import { headerLinks } from "@/utils/headerLinks";
import { AppBar, Box, Button, List, ListItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: colors.neutral,
        height: "72px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 64px",
        }}
      >
        <Image
          src="/companyLogo.svg"
          width={126}
          height={40}
          alt="logo julia naturodiet"
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              marginRight: "16px",
            }}
          >
            {headerLinks.map((link, index) => (
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
          <Button sx={{ height: "40px" }} variant="contained" color="primary">
            Book a Consultation
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
