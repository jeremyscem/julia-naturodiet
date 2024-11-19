import { Box, Typography } from "@mui/material";

const PageUnderConstruction = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h2" textAlign={"center"}>
        Page en cours de construction
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="body1">
          Nous travaillons a la mise en place de cette page
        </Typography>
        <Typography variant="body1">Nous serons bientot en ligne!</Typography>
      </Box>
    </Box>
  );
};

export default PageUnderConstruction;
