import HeroSection from "@/components/HeroSection";
import RegistrationForm from "@/components/Registration";
import SectionHeading from "@/components/SectionHeading";
export default function Home() {
  return (
    <div className="px-20 mt-2">
      <HeroSection />
      <SectionHeading text="Registration" />
      <RegistrationForm />
    </div>
  );
}
