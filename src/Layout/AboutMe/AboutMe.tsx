import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box
      sx={{
        padding: "112px 64px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        "@media (max-width: 768px)": { padding: "112px 16px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",

          "@media (max-width: 768px)": { flexDirection: "column" },
        }}
      >
        <Box
          sx={{ flex: "1", display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="body1">À propos de moi</Typography>
          <Box
            sx={{
              flex: "1",
              marginRight: "32px",
              "@media (max-width: 768px)": {
                marginRight: "0px",
                marginBottom: "24px",
              },
            }}
          >
            <Typography variant="h2">
              Découvrez Mon Parcours en Nutrition et Bien-Être
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
          <Typography
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "normal",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: isExpanded ? "unset" : 6,
            }}
            variant="body1"
          >
            Bonjour et merci de votre visite ! Je suis Julia, naturopathe,
            diplômée de l’école Reidman et passionnée par le bien-être et la
            nutrition, dédiée à vous aider à atteindre vos objectifs de santé.
            La naturopathie, c&apos;est une approche qui utilise des méthodes
            naturelles pour aider le corps à se guérir et se sentir mieux. Elle
            repose sur des principes simples notamment avoir une bonne
            alimentation, dont c’est ma spécialité. En tant que naturopathe et
            coach en nutrition, j’ai pour mission d’accompagner ceux qui
            cherchent à améliorer leur rapport à la nourriture, notamment à
            travers le rééquilibrage alimentaire et la perte de poids. Amoureuse
            de la cuisine gourmande, je crois fermement que l’on peut manger
            sainement tout en prenant plaisir. Je rejette les régimes
            restrictifs qui conduisent souvent à la frustration. Mon approche
            consiste à vous guider vers une alimentation équilibrée et saine
            avec du goût, tout en respectant vos besoins nutritionnels. Mon but
            est de vous aider à vous sentir bien dans votre corps tout en
            savourant chaque bouchée. Ensemble, découvrons comment allier santé
            et plaisir !
          </Typography>
          <Button
            sx={{ width: "137px", whiteSpace: "nowrap" }}
            variant="contained"
            color="primary"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Réduire" : "En savoir plus"}
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

          "@media (max-width: 768px)": {
            boxShadow: "none",
          },
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
