"use client";
import { faq } from "@/staticData/faq";
import { colors } from "@/theme/colors";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ArrowIcon from "../../../public/icons/ArrowIcon";

const Faq = () => {
  const [expanded, setExpanded] = useState<string | false>("faq0");
  const toggleAccordion = (i: number) => () => {
    setExpanded(`faq${i}` === expanded ? false : `faq${i}`);
  };
  return (
    <Box
      sx={{
        padding: "112px 64px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex" }} mb={10}>
        <Typography variant="h2">Foire aux questions</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "858px",
        }}
      >
        {faq.map((item, i) => (
          <Box key={item.id}>
            <Accordion
              expanded={expanded === `faq${i}`}
              onChange={toggleAccordion(i)}
              sx={{
                backgroundColor:
                  expanded === `faq${i}` ? colors.lightPink : "transparent",
                boxShadow: "none",
                borderBottom: `1px solid ${colors.lightPink}`,
                borderRadius: "0!important",
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h6">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" fontWeight={500}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "250px",
          right: "0",
          height: "100%",
          width: "420px",
        }}
      >
        <Image
          style={{ position: "absolute" }}
          src={"/faq/Vector.svg"}
          alt="Vector"
          width={420}
          height={437}
        />
        <Image
          style={{ position: "absolute", top: "100px", left: "70px" }}
          src={"/faq/products.svg"}
          alt="Vector"
          width={285}
          height={365}
        />
      </Box>
    </Box>
  );
};

export default Faq;
