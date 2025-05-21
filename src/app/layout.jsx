import { Inter } from "next/font/google";
import "./globals.scss";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

// Import de la police Inter Regular
const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Portfolio Jason Amba",
  description: "Voici mon portfolio !",
  icons: {
    icon:"https://portfoliojason.s3.eu-north-1.amazonaws.com/Images/Profile/jasonIcon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="st_HGpO0IrAkgySCy33TAkQiWeZBrHyOHyBkRC5WgQg" />
      </head>
      <body className={inter.variable}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src="https://portfoliojason.s3.eu-north-1.amazonaws.com/Videos/Background+portfolio/Aura.mp4" type="video/mp4" />
        </video>
        {children}
        <ToastContainer position="top-center" autoClose={3000}/>
      </body>
    </html>
  );
}
