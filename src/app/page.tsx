import PosterCard from "./components/PosterCard";
import { fetchFromTMDB } from "./lib/tmdb";
import Link from "next/link";

export default async function Home() {
  // Fetch multiple categories
  const [trending, topRated] = await Promise.all([
    fetchFromTMDB("/trending/tv/week"),
    fetchFromTMDB("/tv/top_rated"),
  ]);

  const sections = [
    { title: "Trending This Week", shows: trending.results },
    { title: "Top Rated", shows: topRated.results },
  ];

  // Pick first trending show as hero banner
  const heroShow = trending.results[0];

  return (
    <main className="bg-black text-white min-h-screen space-y-16">
      {/* Hero Section */}
      {heroShow && (
        <section
          className="relative w-full h-[500px] md:h-[600px] flex flex-col justify-end bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${heroShow.backdrop_path})`, }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

          {/* Hero Content */}
          <div className="relative p-8 md:p-20 space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Welcome to Next Episode.
            </h1>
            <p className="text-sm md:text-lg max-w-xl line-clamp-3">
              Discover millions of movies, TV shows, and the talented people behind them.
              Dive into trailers, reviews, ratings, and hidden stories by exploring your next favorite today.
            </p>

            <div className="flex gap-4 mt-4">
              <Link href={`/show/${heroShow.id}`}>
                <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition">
                  Let's Start
                </button>
              </Link>
              <Link href={`/show/${heroShow.id}`}>
                <button className="px-6 py-2 bg-white text-black hover:bg-gray-300 rounded-md font-semibold transition">
                  More Info
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* TV Sections */}
      <div className="px-8 md:px-20 space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {section.title}
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {section.shows.slice(0, 10).map((show: any) => (
                <Link key={show.id} href={`/show/${show.id}`} className="shrink-0">
                  <PosterCard title={show.name} posterPath={show.poster_path} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
