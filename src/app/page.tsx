import { HomePageClient } from "@/components/home-page-client";
import HomePageClientBottom from "@/components/home-page-client-bottom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uday Vashishtha | Portfolio",
};

export default function HomePage() {
  return (
    <div className="min-h-screen gap-16 text-center">
      <HomePageClient />
    </div>
  );
}