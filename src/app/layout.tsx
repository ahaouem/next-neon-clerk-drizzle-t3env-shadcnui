import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "The Greatest 6 Stack",
  description: "Generated by create greatest six stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <ClerkProvider>
        <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
