import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import PlausibleProvider from "next-plausible";

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

const barlowCondensed = Barlow_Condensed({
  variable: "--barlowCondensed",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian Ware's Portfolio Website",
  description:
    "Welcome to my website wher you can see my most recent work and download my resume. Feel free to reach out at any time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <PlausibleProvider
          domain='chrisware.dev'
          trackLocalhost={false}
          enabled={true}
        />
      </head>
      <body
        className={`${EduSocialCondensedMedium.variable} ${ABCSocialLight.variable} ${GTAmericaMonoRegular.variable} ${CigarsLight.variable} ${barlowCondensed.variable}`}
      >
        <Toaster
          position='bottom-right'
          toastOptions={{
            className: "toastFont",
            duration: 6000,
            style: {
              backgroundColor: "#b8d5e6 ",
              color: "#475e3c",
              borderRadius: "0px",
              textAlign: "center",
              whiteSpace: "nowrap",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
