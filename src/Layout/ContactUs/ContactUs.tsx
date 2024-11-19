import { Box, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import { SubmitHandler, useForm } from "react-hook-form";
import { colors } from "theme/colors";

type Inputs = {
  name: string;
  email: string;
  message: string;
};
const ContactUs = () => {
  const [isClientDesktop, setIsClientDesktop] = useState(false);

  useEffect(() => {
    setIsClientDesktop(isDesktop);
  }, []);

  useEffect(() => emailjs.init("K6snhHQUgNHtXMCHu"), []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
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
        padding: isClientDesktop ? "112px 64px" : "112px 16px",
        display: "flex",
        justifyContent: "space-between",
        gap: 4,
        flexDirection: isClientDesktop ? "row" : "column-reverse",
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
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Image
              src="/icons/envelope.svg"
              alt="phone"
              width={24}
              height={24}
            />
            <Link
              style={{ textDecoration: "none", color: colors.black }}
              href="mailto:julianaturodiet@gmail.com"
            >
              <Typography fontWeight={400} variant="body2">
                julianaturodiet@gmail.com
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Image src="/icons/phone.svg" alt="phone" width={24} height={24} />
            <Link
              style={{ textDecoration: "none", color: colors.black }}
              href="tel:+972522630384"
            >
              <Typography fontWeight={400} variant="body2">
                +972522630384
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }} mb={4}>
            <Image
              src="/icons/instagramIcon.svg"
              alt="phone"
              width={24}
              height={24}
            />
            <a
              style={{ textDecoration: "none", color: colors.black }}
              href="https://www.instagram.com/julia_naturodiet/"
            >
              <Typography fontWeight={400} variant="body2">
                Follow my tips on Instagram
              </Typography>
            </a>
          </Box>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                style={{
                  backgroundColor: "#E3D5CA",
                  borderRadius: "12px",
                  borderColor: colors.neutral,
                  height: "48px",
                  padding: "0 12px",
                }}
                defaultValue="test"
                {...register("name", { required: true })}
              />
              {errors.name && <span color="red">This field is required</span>}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                style={{
                  backgroundColor: "#E3D5CA",
                  borderRadius: "12px",
                  borderColor: colors.neutral,
                  height: "48px",
                  padding: "0 12px",
                }}
                {...register("email", { required: true })}
              />
              {errors.email && <span color="red">This field is required</span>}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Message"
                style={{
                  backgroundColor: "#E3D5CA",
                  borderRadius: "12px",
                  borderColor: colors.neutral,
                  minHeight: "180px",
                  padding: "12px 12px",
                }}
                {...register("message", { required: true })}
              />
            </Box>
            {errors.message && <span color="red">This field is required</span>}

            <Button
              disabled={isSubmitting}
              type="submit"
              sx={{ width: isClientDesktop ? "103px" : "100%" }}
              variant="contained"
            >
              Submit
            </Button>
            {isSubmitSuccessful && <p>Thank you for your message!</p>}
          </form>
        </Box>
      </Box>

      <Image
        style={isClientDesktop ? { aspectRatio: 643 / 838 } : {}}
        src="/juliaPortrait.svg"
        width={isClientDesktop ? 643 : 293}
        height={isClientDesktop ? 838 : 335}
        alt="logo julia naturodiet"
      />
    </Box>
  );
};

export default ContactUs;
