import Leaderboard from "@/components/googleAds/Leaderboard";
import Articles from "@/components/home/Articles";
import DeityCategories from "@/components/home/DeityCategories";
import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import TempleGroups from "@/components/home/TempleGroups";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <Leaderboard />
      <TempleGroups />
      <DeityCategories />
      <Leaderboard />
      <Articles  />
      <Leaderboard />
      <h1 className="p-5 text-accent hover:text-primary-hover">TempleDetails.in</h1>
      <h1 className="p-5 text-primary">TempleDetails.in</h1>
    </>
  );
}