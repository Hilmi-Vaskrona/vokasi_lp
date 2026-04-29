interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-base text-[#0F172A]">🔍 Cari Artikel</h2>
      <div className="relative flex w-full">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] text-sm pointer-events-none">
          ⌕
        </span>
        <input
          type="text"
          placeholder="Cari berita, topik..."
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full pl-9 pr-4 py-2.5
            rounded-xl border border-[#E2E8F0]
            bg-[#F8FAFC]
            text-sm text-[#0F172A]
            placeholder-[#94A3B8]
            focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100
            transition-all duration-200
          "
        />
      </div>
    </div>
  );
};

export default SearchBar;

