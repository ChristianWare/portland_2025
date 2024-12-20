import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.css";

const EduSocialCondensedMedium = localFont({
  src: "../../public/fonts/EduSocialCondensedMedium.woff2",
  variable: "--EduSocialCondensedMedium",
  display: "swap",
});

const ABCSocialLight = localFont({
  src: "../../public/fonts/ABCSocialLight.woff2",
  variable: "--ABCSocialLight",
  display: "swap",
});

const GTAmericaMonoRegular = localFont({
  src: "../../public/fonts/GTAmericaMonoRegular.woff2",
  variable: "--GTAmericaMonoRegular",
  display: "swap",
});

const CigarsLight = localFont({
  src: "../../public/fonts/CigarsLight.woff2",
  variable: "--CigarsLight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${EduSocialCondensedMedium.variable} ${ABCSocialLight.variable} ${GTAmericaMonoRegular.variable} ${CigarsLight.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
