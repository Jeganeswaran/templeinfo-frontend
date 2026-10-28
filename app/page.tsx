import Leaderboard from "@/components/googleAds/Leaderboard";
import InlineRectangle from "@/components/googleAds/InlineRectangle";
import ArticlesGrid from "@/components/home/ArticlesGrid";
import DeityCategories from "@/components/home/DeityCategories";
import FeaturedTemples from "@/components/home/FeaturedTemples";
import Hero from "@/components/home/Hero";
import PanchaBhootaSthalam from "@/components/home/PanchaBhootaSthalam";
import SampleTempleListings from "@/components/home/SampleTempleListings";
import Statistics from "@/components/home/Statistics";
import TempleGroups from "@/components/home/TempleGroups";
import TempleStats from "@/components/home/TempleStats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <Leaderboard />
      <TempleGroups />
      <DeityCategories />

      <SampleTempleListings />

      <FeaturedTemples />
      <InlineRectangle />
      <PanchaBhootaSthalam />
      <ArticlesGrid />
      <TempleStats />
      <Leaderboard />
    </>
  );
}
