import ApplicationPage from "@/components/pages/ApplicationPage";
import EventInfoPage from "@/components/pages/EventInfoPage";
import FAQPage from "@/components/pages/FAQPage";
import FooterSection from "@/components/pages/FooterSection";
import LandingPage from "@/components/pages/LandingPage";
import SponsorPage from "@/components/pages/SponsorPage";
import TeamPage from "@/components/pages/TeamPage";

export default function Home(ref: any) {
  return (
    <main className="absolute inset-0">
        <LandingPage/>
        <EventInfoPage/>
        <FAQPage/>
        <ApplicationPage/>
        <FooterSection/>
    </main>
  )
}