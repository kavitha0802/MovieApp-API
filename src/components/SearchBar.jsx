export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search Your Movies . . ."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-1/2 p-2 rounded-lg bg-gray-600 text-white placeholder-gray-300 focus:outline-none"
      />
    </div>
  );
}
