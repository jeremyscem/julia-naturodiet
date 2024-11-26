import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { AppContextProvider } from "common/AppContext";
import ClientDrawerWrapper from "common/ClientDrawerWrapper";
import type { Metadata } from "next";
import { colors } from "theme/colors";
import Header from "../components/Header";
import theme from "../theme/theme";

export const metadata: Metadata = {
  title: "Julia Naturodiet",
  description: "Julia Naturodiet, votre conseillère nutritionnelle ",
  keywords: [
    "Julia Naturodiet",
    "naturopathe",
    "régime",
    "coach en nutrition",
    "nutrition",
    "coach régime",
    "recettes",
    "manger sain",
    "healthy",
  ],
  icons: {
    icon: "/companyLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: colors.neutral }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AppContextProvider>
              <ClientDrawerWrapper>
                <Header />
                {children}
              </ClientDrawerWrapper>
            </AppContextProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
