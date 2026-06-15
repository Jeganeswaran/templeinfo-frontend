import Leaderboard from "@/components/googleAds/Leaderboard";
import InlineRectangle from "@/components/googleAds/InlineRectangle";
import Articles from "@/components/home/Articles";
import ArticlesGrid from "@/components/home/ArticlesGrid";
import DeityCategories from "@/components/home/DeityCategories";
import FeaturedTemples from "@/components/home/FeaturedTemples";
import Hero from "@/components/home/Hero";
import PanchaBhootaSthalam from "@/components/home/PanchaBhootaSthalam";
import Statistics from "@/components/home/Statistics";
import TempleGroups from "@/components/home/TempleGroups";
import TempleStats from "@/components/home/TempleStats";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Search */}
      <Hero />

      {/* Quick Statistics Bar */}
      <Statistics />

      {/* Google Ads - Leaderboard */}
      <Leaderboard />

      {/* Sacred Temple Collections */}
      <TempleGroups />

      {/* Deity Categories Carousel */}
      <DeityCategories />

      {/* Featured Temples Grid */}
      <FeaturedTemples />

      {/* Google Ads - Inline Rectangle (Double) */}
      <InlineRectangle />

      {/* Pancha Bhoota Sthalam Section */}
      <PanchaBhootaSthalam />

      {/* Articles Carousel with Tag Filters */}
      <Articles />

      {/* Articles Grid Section */}
      <ArticlesGrid />

      {/* Temple Statistics Cards */}
      <TempleStats />

      {/* Google Ads - Leaderboard */}
      <Leaderboard />
    </>
  );
}
