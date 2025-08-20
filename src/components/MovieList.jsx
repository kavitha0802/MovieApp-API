import MovieCard from "./MovieCard";

export default function MovieList({ movies, favorites, onToggle }) {
  if (!movies || movies.length === 0) {
    return <p className="text-center text-gray-600">No movies found.</p>;
  }

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => {
        const isFav = favorites.some((fav) => fav.id === movie.id); // ✅ check here
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFav={isFav}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
}
