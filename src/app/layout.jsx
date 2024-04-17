import "./globals.css";

// FontAwasome import - * icons *
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// font import
import { ibmhebrew } from "@/utils/fonts";

// components import
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibmhebrew}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
