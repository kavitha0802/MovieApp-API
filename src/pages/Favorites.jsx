import MovieCard from "../components/MovieCard";

const Favorites = ({ favorites, onToggle }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Favorites ❤️</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFav={true}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
