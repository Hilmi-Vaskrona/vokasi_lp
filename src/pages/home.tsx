// import AboutSection from '@/layouts/home/about'
// import AboutPage2 from '@/layouts/home/about2'
// import CobaGSAP from '@/layouts/home/cobagsap'
import AboutPage from "@/components/about";
import HeroLayout from "@/layouts/home/hero";
import MengenalDelta from "@/layouts/home/mengenalDelta";
import MemberDelta from "@/layouts/home/member";
import PengalamanSection from "@/layouts/home/pengalaman";
import GalleryPage from "@/layouts/home/gallery";

const HomePage = () => {
  return (
    <main className="w-full min-h-screen bg-[#F7F7F7]">
      <HeroLayout />

      <AboutPage />

      <MengenalDelta />

      <MemberDelta />

      <PengalamanSection />

      <GalleryPage />
    </main>
  );
};

export default HomePage;
