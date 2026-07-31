import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import QuickStats from "../components/home/QuickStats";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <QuickStats />
    </MainLayout>
  );
}

export default Home;