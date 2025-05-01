import { Inter } from "next/font/google";
import "./globals.scss";

// Import de la police Inter Regular
const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Portfolio Jason Amba",
  description: "Voici mon portfolio !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.variable}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src="/Videos/Aura.mp4" type="video/mp4" />
        </video>
        {children}
      </body>
    </html>
  );
}
