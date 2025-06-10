import { CustomNavbar } from "@/components/custom-navbar";
import { GradientPricing } from "@/components/gradient-pricing";
import { HeroSection } from "@/components/hero-section";
import { FAQ } from "./components/faq";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <div className="mx-auto mt-10 max-w-7xl">
        <main>
          <CustomNavbar />
          <HeroSection />
          <GradientPricing />
          <FAQ />
        </main>
      </div>
      <Footer />
    </div>
  );
}
