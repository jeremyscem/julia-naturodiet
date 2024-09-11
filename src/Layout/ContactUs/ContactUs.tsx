"use client";
import { Box, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};
const ContactUs = () => {
  useEffect(() => emailjs.init("K6snhHQUgNHtXMCHu"), []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
      .send("service_s5o3x2y", "template_z15h6xl", {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then((result) => {
        console.log("Email successfully sent!", result.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <Box
      sx={{
        padding: "112px 64px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: "700px",
        }}
        mb={10}
      >
        <Typography variant="h2">Contact Us</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Lorem ipsum dolor sit amet,
          consectetur
        </Typography>
        <Box>
          <Box>
            <Image src="/images/phone.png" alt="phone" width={20} height={20} />
            <Link href="tel:+1234567890">+1234567890</Link>
          </Box>
          <Box>
            <Image src="/images/phone.png" alt="phone" width={20} height={20} />
            <Link href="tel:+1234567890">+1234567890</Link>
          </Box>
          <Box>
            <Image src="/images/phone.png" alt="phone" width={20} height={20} />
            <Link href="tel:+1234567890">+1234567890</Link>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue="test"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
            <input {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}

            <textarea {...register("message", { required: true })} />
            {errors.message && <span>This field is required</span>}
            <input type="submit" />
          </form>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: "700px",
        }}
        mb={10}
      >
        <Typography variant="h2">Contact Us</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Lorem ipsum dolor sit amet,
          consectetur
        </Typography>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
