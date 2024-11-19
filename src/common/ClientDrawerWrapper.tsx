"use client";

import MobileMenu from "@/components/MobileMenu";
import { Drawer } from "@mui/material";
import React from "react";
import { colors } from "theme/colors";
import { useAppContext } from "./AppContext";

export default function ClientDrawerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { drawerOpen } = useAppContext();

  return (
    <>
      <Drawer
        ModalProps={{
          style: {
            marginTop: "64px",
          },
        }}
        hideBackdrop
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: colors.neutral,
            marginTop: "64px",
          },
        }}
        open={drawerOpen}
      >
        <MobileMenu />
      </Drawer>
      {children}
    </>
  );
}
