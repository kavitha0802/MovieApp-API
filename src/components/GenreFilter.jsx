export default function GenreFilter({ genres, selectedGenre, onChange }) {
  return (
    <select
      value={selectedGenre}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 rounded-lg border shadow-md bg-gray-100"
    >
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}
