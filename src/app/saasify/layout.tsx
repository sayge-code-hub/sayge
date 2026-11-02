import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Caveat } from "next/font/google";
import { SaasifyFooter } from "@/components/saasify/SaasifyFooter";
import { SaasifyNav } from "@/components/saasify/SaasifyNav";

const script = Caveat({
  subsets: ["latin"],
  variable: "--font-saasify-script",
});

export const metadata: Metadata = {
  title: "SaaSify",
  icons: {
    icon: [{ url: "/saasify-icon.png", type: "image/png" }],
    apple: [{ url: "/saasify-icon.png", type: "image/png" }],
  },
};

export default function SaasifyLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`saasify min-h-full ${script.variable}`}>
      <SaasifyNav />
      <main>{children}</main>
      <SaasifyFooter />
    </div>
  );
}
