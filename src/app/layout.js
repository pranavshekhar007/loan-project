import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import Script from "next/script"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoggedDataProvider } from "./context/Context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "RupeeLoan",
  description: "Best Loan & Finance Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

         <link rel="icon" type="image/png" href="/assets/logo.jpeg" />
        
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${notoSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
         <LoggedDataProvider>
        {children}

           <ToastContainer position="top-right" autoClose={4000} />

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        </LoggedDataProvider>
      </body>
    </html>
  );
}
