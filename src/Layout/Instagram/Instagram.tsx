import { instagram } from "@/staticData/instagram";
import { colors } from "@/theme/colors";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Instagram = () => {
  return (
    <Box
      sx={{
        padding: "112px 64px",
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
          <Box sx={{ display: "flex" }} key={i}>
            <a
              style={{
                width: "100px",
                height: "100px",
                position: "relative",
              }}
              rel="noreferrer noopener"
              target="_blank"
              href={item.link}
            >
              <Image
                src={item.imageUrl}
                alt={item.alt}
                fill
                objectFit="cover"
              />
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Instagram;
