import { DM_Sans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"
const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Airpure",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>         
       
      {children}
</body>
    </html>
  );
}
