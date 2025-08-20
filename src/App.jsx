import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Favorites from "./pages/Favorites";
import MovieList from "./components/MovieList";
import GenreFilter from "./components/GenreFilter";

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  // ✅ Fetch genres
  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US`
      );
      const data = await res.json();
      setGenres(data.genres || []);
    };
    fetchGenres();
  }, []);

  // ✅ Fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=1`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, []);

  // ✅ Toggle favorites
  const toggleFavorite = (movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

 // ✅ Filter movies by search + genre
const filteredMovies = movies.filter((m) => {
  const matchesGenre = selectedGenre
    ? m.genre_ids.includes(Number(selectedGenre))
    : true;

  const matchesSearch = search
    ? m.title.toLowerCase().includes(search.toLowerCase())
    : true;

  return matchesGenre && matchesSearch;
});


  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow p-4 flex justify-between">
          <Link to="/" className="text-xl font-bold">🎬 MovieApp</Link>
          <div className="space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/favorites" className="hover:underline">
              Favorites ({favorites.length})
            </Link>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <main className="max-w-7xl mx-auto p-4">
                <Header count={favorites.length} />
                <SearchBar value={search} onChange={setSearch} />

                {/* ✅ Genre Filter Dropdown */}
                <div className="my-4">
                  <GenreFilter
                    genres={genres}
                    selectedGenre={selectedGenre}
                    onChange={setSelectedGenre}
                  />
                </div>

                <MovieList
                  movies={filteredMovies}
                  favorites={favorites}
                  onToggle={toggleFavorite}
                />
              </main>
            }
          />

          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} onToggle={toggleFavorite} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
