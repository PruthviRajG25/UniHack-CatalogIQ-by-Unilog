import { notFound } from "next/navigation";
import { CardsSection } from "@/components/sections/cards-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TemplatesSection } from "@/components/sections/templates-section";
import { ToolsFooterSection } from "@/components/sections/tools-footer-section";

interface PageProps {
  params: Promise<{
    section: string;
  }>;
}

export function generateStaticParams() {
  return [
    { section: "hero" },
    { section: "features" },
    { section: "templates" },
    { section: "cards" },
    { section: "tools-footer" },
  ];
}

export default async function PreviewPage({ params }: PageProps) {
  const { section } = await params;

  switch (section) {
    case "hero":
      return <HeroSection />;
    case "features":
      return <FeaturesSection />;
    case "templates":
      return <TemplatesSection />;
    case "cards":
      return <CardsSection />;
    case "tools-footer":
      return <ToolsFooterSection />;
    default:
      notFound();
  }
}
