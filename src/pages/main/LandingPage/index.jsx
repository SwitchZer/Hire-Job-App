import Footer from "@/components/Footer";
import LandingPageContent from "@/components/LandingPage";
import TestimonialCard from "@/components/LandingPage/TestimonialCard";
import NavbarLandingPage from "@/components/NavbarLandingPage";

const LandingPage = () => {
  return (
    <>
      <div className="container flex flex-col items-center self-center w-full max-w-[1218px] max-md:max-w-full">
        <NavbarLandingPage />
        <LandingPageContent />
      </div>
      <TestimonialCard />
      <section className="container flex overflow-hidden relative flex-col self-center pt-14 pb-2.5 mt-20 w-full fill-white fill-opacity-10 max-w-[1140px] min-h-[294px] max-md:mt-10 max-md:max-w-full">
        <div className="flex relative gap-5 px-16 py-20 bg-[#5E50A1] rounded-[40px_8px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <h2 className="flex-auto text-4xl font-semibold text-white leading-[56px]">
            Lorem ipsum dolor sit amet
          </h2>
          <button className="justify-center px-6 py-6 my-auto text-base font-bold bg-white rounded text-[#5E50A1] max-md:px-5">
            Start From Now
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
