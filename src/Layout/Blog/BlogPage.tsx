"use client";

import styled from "@emotion/styled";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import { blogData } from "staticData/blogData";
import { colors } from "theme/colors";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Container
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            display: "flex",
            gap: "64px 32px",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {children}
        </Box>
      )}
    </Container>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BlogPage = () => {
  const [value, setValue] = useState(0);
  const [isClientDesktop, setIsClientDesktop] = useState(false);

  useEffect(() => {
    const gett = async () => {
      const posts = await fetch("/api/blog").then((res) => res.json());
    };

    setIsClientDesktop(isDesktop);

    gett();
  }, []);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        padding: isClientDesktop ? "170px 64px" : "112px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <Typography variant="body1">Blog</Typography>
        <Typography sx={{ marginBottom: "8px" }} variant="h2">
          Le blog de Julia
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et
          quas temporibus,
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            centered
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Recipes" {...a11yProps(0)} />
            <Tab label="Healthy tips" {...a11yProps(1)} />
            <Tab label="Naturopathy" {...a11yProps(2)} />
            <Tab label="Children" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Grid
            container
            spacing={isClientDesktop ? 2 : 7}
            justifyContent="center"
          >
            {blogData.map((blog) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                key={blog.id}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
              >
                <StyledLink
                  style={{
                    maxWidth: "416px",
                    textDecoration: "none",
                    display: "flex",
                    width: "100%",
                  }}
                  href={`/blog/${blog.slug}`}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        aspectRatio: "416/234",
                        width: "100%",
                        height: "auto",
                        overflow: "hidden",
                        borderTopLeftRadius: "40px",
                        borderTopRightRadius: "40px",
                      }}
                    >
                      <Image
                        src={blog.image}
                        fill
                        sizes="100vh"
                        style={{
                          objectFit: "cover",
                        }}
                        alt={blog.title}
                      />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: colors.white,
                        borderBottomLeftRadius: "40px",
                        borderBottomRightRadius: "40px",
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "416px",
                        width: "100%",
                        height: "234px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "32px 24px 48px",
                        }}
                      >
                        <Typography fontFamily={"Lora"} variant="body2">
                          {blog.category}
                        </Typography>
                        <Typography sx={{ marginBottom: "8px" }} variant="h5">
                          {blog.title}
                        </Typography>
                        <Typography
                          fontFamily={"Lora"}
                          variant="body2"
                          fontWeight={400}
                        >
                          {blog.date} . {blog.timesRead} min de lecture
                        </Typography>

                        <Typography variant="body1">
                          {blog.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </StyledLink>
              </Grid>
            ))}
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default BlogPage;
