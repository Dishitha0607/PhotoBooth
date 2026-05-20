const FILTERS = [
  { label: "Normal", value: "none" },
  { label: "B&W", value: "grayscale(100%)" },
  { label: "Vintage", value: "sepia(80%)" },
  { label: "Warm", value: "contrast(110%) saturate(130%)" },
  { label: "Dreamy", value: "brightness(110%) blur(1px)" },
];

export default function FilterSelector({ filter, setFilter }) {
  return (
    <div className="mt-6 text-center">
      <p className="text-gray-500 mb-4">Choose a filter..</p>
      <div className="flex gap-3 justify-center flex-wrap">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-5 py-2 border rounded-full transition-all ${
              filter === value
                ? "bg-pink-500 text-white"
                : "hover:bg-pink-50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}