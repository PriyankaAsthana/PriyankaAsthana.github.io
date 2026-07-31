import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import QuickStats from "../components/home/QuickStats";

import ResearchShowcase from "../components/researchShowcase/ResearchShowcase";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <QuickStats />
      <ResearchShowcase />
    </MainLayout>
  );
}

export default Home;