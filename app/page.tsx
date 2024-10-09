import AboutProgramSection from "@/components/AboutProgramSection";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import RegistrationForm from "@/components/Registration";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <div className="flex flex-col mt-8 gap-16 md:gap-32">
      <HeroSection />
      <div className="px-8 md:px-16">
        <div className="mb-4 md:mb-8">
          <SectionHeading text="Registration" />
        </div>
        <RegistrationForm />
      </div>
      <div className="px-8 md:px-16">
        <div className="mb-4 md:mb-8">
          <SectionHeading text="Enquiry Form" />
        </div>
        <EnquiryForm />
      </div>
      <MessageSection />
      <div className="px-8 md:px-16">
        <div className="mb-4 md:mb-8">
          <SectionHeading text="About the Program" />
        </div>
        <AboutProgramSection />
      </div>
      <Footer />
    </div>
  );
}
