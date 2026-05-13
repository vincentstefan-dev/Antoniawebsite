import HomePage from "./Components/Mainpage/Homepage";
import AboutMeSection from "./Components/Aboutme/AboutmePage";
import PortfolioPage from "./Components/Portfolio/PortfolioPage";
import ReviewsPage from "./Components/Reviews/ReviewsPage";
import MiddleCTAPage from "./Components/MiddleCTA/MiddleCTAPage";
import ValueSectionPage from "./Components/ValueSection/ValueSectionPage";
import FooterPage from "./Components/Footer/FooterPage";

export default function Page() {
  return (
    <>
      <HomePage />
      <AboutMeSection />
      <PortfolioPage />
      <ReviewsPage />
      <MiddleCTAPage />
      <ValueSectionPage />
      <FooterPage />
    </>
  );
}