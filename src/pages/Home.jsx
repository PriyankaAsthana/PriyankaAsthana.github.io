import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import QuickStats from "../components/home/QuickStats";

import ResearchShowcase from "../components/researchShowcase/ResearchShowcase";
import FeaturedProjects from "../components/home/FeaturedProjects";
import ExperienceTimeline from "../components/home/ExperienceTimeline";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <QuickStats />
      <ResearchShowcase />
      <FeaturedProjects />
      <ExperienceTimeline />
    </MainLayout>
  );
}

export default Home;