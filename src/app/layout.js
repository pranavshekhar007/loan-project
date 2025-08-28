import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // ✅ Needed for Bootstrap JS
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // ✅ Font Awesome

// Google Fonts (Next.js way)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RupeeLoan",
  description: "Best Loan & Finance Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* If you have custom Google Fonts from <link>, add here */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        {/* ✅ Bootstrap JS Bundle (includes Popper) */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
