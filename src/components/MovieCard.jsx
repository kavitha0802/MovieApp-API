import { Heart } from "lucide-react";

export default function MovieCard({ movie, isFav, onToggle }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 relative">
      {/* Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg mb-3 w-full h-60 object-cover"
      />

      {/* Title + Rating */}
      <h2 className="font-bold">{movie.title}</h2>
      <p className="text-sm text-gray-700">⭐ {movie.vote_average}</p>

      {/* Favorite Button */}
      <button
        onClick={() => onToggle(movie)}
        className="absolute top-4 right-4 bg-white/70 p-2 rounded-full shadow"
      >
        <Heart
          size={22}
          fill={isFav ? "currentColor" : "none"}   // ✅ heart fills red when fav
          className={isFav ? "text-red-600" : "text-gray-600"}
        />
      </button>
    </div>
  );
}
