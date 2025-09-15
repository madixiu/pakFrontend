// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "شرکت لبنیات پاستوریزه پاک",
  description:
    "مجموعه لبنی پاک با برندی معتبر، ارائه دهنده سبد کامل فرآورده های سالم، باکیفیت و رقابتی، بهترین انتخاب مشتریان و فعال در بازارهای ملی و فرا ملی است.",
};

export default function RootLayout({ children }) {
  // const isRTL = "rtl";
  return (
    <html lang="fa" dir={"rtl"}>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Topbar /> {/* Render the Topbar */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
