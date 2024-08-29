import { services } from "@/staticData/services";
import { colors } from "@/theme/colors";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ServicesDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "40px",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "640px",

          boxShadow:
            "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)",
        }}
      >
        <Image
          style={{
            borderTopLeftRadius: "80px",
            borderTopRightRadius: "80px",
          }}
          src={services[0].imageUrl}
          width={640}
          height={360}
          alt={services[0].name}
        />
        <Box
          sx={{
            padding: "48px",
            backgroundColor: colors.white,
            display: "flex",
            borderBottomLeftRadius: "80px",
            borderBottomRightRadius: "80px",
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography mb={1} variant="body2">
            {services[0].name}
          </Typography>
          <Typography mb={3} variant="h3">
            {services[0].title}
          </Typography>
          <Typography mb={4} variant="body1">
            {services[0].title}
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
        }}
      >
        {services.slice(1).map((service) => (
          <Box
            sx={{
              display: "flex",
              width: "640px",
              backgroundColor: "transparent",
              boxShadow:
                "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)",
            }}
            key={service.name}
          >
            <Box
              sx={{
                padding: "24px",
                backgroundColor: colors.white,
                display: "flex",
                borderBottomLeftRadius: "40px",
                borderTopLeftRadius: "40px",
                flexGrow: 1,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography mb={1} variant="body2">
                {service.name}
              </Typography>
              <Typography mb={1} variant="h3">
                {service.title}
              </Typography>
              <Typography mb={3} variant="body1">
                {service.title}
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
            <Image
              style={{
                borderTopRightRadius: "40px",
                borderBottomRightRadius: "40px",
                flexGrow: 1,
              }}
              src={service.imageUrl}
              width={320}
              height={368}
              alt={service.name}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesDetails;
