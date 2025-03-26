import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import { SearchProvider } from "@/components/Context/SearchContext";
import MaintenancePage from "@/components/MaintenancePage/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Software Development Centre",
  description: "",
};

export default function RootLayout({ children }) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <SearchProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
