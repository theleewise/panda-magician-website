import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-bebasNeue',
})

export const metadata: Metadata = {
  title: "Panda Magician",
  description: "",
  manifest: "./site.webmanifest",
  themeColor: "#ffffff",
  icons: {
    apple: './apple-touch-icon.png',
  },
};

{/*
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#22c55e">
<meta name="msapplication-TileColor" content="#22c55e">
*/}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-DCZYJV4EV5" />
      </body>
    </html>
  );
}
