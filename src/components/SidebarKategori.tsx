"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  items: string[];
  onSelect?: (value: string) => void;
}

export default function SidebarKategori({ items, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-gradient-to-b from-[#2563EB] to-[#1D4ED8]" />
        <h2 className="font-bold text-base text-[#0F172A]">Post Kategori</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onSelect?.(item)}
            className="
              px-3.5 py-1.5
              rounded-full
              border border-[#BFDBFE]
              text-[#2563EB]
              text-xs font-semibold
              hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#1D4ED8]
              hover:text-white hover:border-transparent
              hover:shadow-[0_2px_8px_rgba(37,99,235,0.25)]
              transition-all duration-200 ease-out
              active:scale-95
            "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

