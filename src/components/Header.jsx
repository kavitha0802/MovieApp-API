export default function Header({ count = 0 }) {
  return (
    <header className="sticky top-0 z-10 bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-semibold">Movie App</h1>
        <button className="text-lg font-medium">
          Watchlist({count})
        </button>
      </div>
    </header>
  );
}
