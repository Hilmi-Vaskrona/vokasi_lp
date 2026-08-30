import React, { useState } from "react";

interface Member {
  name: string;
  image: string;
  logo: string;
  location?: string;
  categories?: string[];
  url?: string;
  logoSize?: "sm" | "md";
  logoFill?: boolean;   // true = logo fills the frame (for logos that appear too small)
  logoScale?: number;  // custom zoom scale, only used when logoFill=true (default: 1.35)
}

const MemberCard: React.FC<Member> = ({
  name,
  image,
  logo,
  location,
  categories = [],
  url = "#",
  logoSize = "md",
  logoFill = false,
  logoScale = 1.35,
}) => {
  const [expanded, setExpanded] = useState(false);

  const visibleCategories = expanded
    ? categories
    : categories.slice(0, 3);

  // Frame (circle) selalu fixed size.
  // logoFill=false (default): img punya ukuran sendiri, centered di frame.
  // logoFill=true: img mengisi penuh frame (Set to Frame) dengan padding kecil.
  const logoSizeMap = {
    sm: { circle: "w-16 h-16", img: "w-12 h-12" },
    md: { circle: "w-20 h-20", img: "w-16 h-16" },
  };
  const logoClass = logoSizeMap[logoSize];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block break-inside-avoid"
    >
      <div className="group bg-white rounded-[28px] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 w-full">

        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
            style={{
              height: `${240 + Math.floor(Math.random() * 120)}px`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative px-5 pb-6 pt-14">

          {/* LOGO */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div
              className={`bg-white rounded-full shadow-xl ${logoClass.circle} ring-4 ring-white overflow-hidden ${
                logoFill ? '' : 'flex items-center justify-center'
              }`}
            >
              <img
                src={logo}
                alt={`${name} logo`}
                className={logoFill
                  ? 'w-full h-full object-contain'
                  : `${logoClass.img} object-contain`
                }
                style={logoFill ? { transform: `scale(${logoScale})` } : undefined}
              />
            </div>
          </div>

          {/* NAME */}
          <h3 className="text-center font-bold text-gray-900 text-lg mb-3 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>

          {/* LOCATION */}
          {location && (
            <p className="text-gray-500 text-sm text-center leading-relaxed mb-4 line-clamp-3">
              {location}
            </p>
          )}

          {/* CATEGORIES */}
          {categories.length > 0 && (
            <>
              <div className="flex flex-wrap justify-center gap-2">
                {visibleCategories.map((cat, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {categories.length > 3 && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setExpanded(!expanded);
                  }}
                  className="mt-4 w-full py-2 rounded-xl bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition"
                >
                  {expanded ? "Tutup" : "Lihat Selengkapnya"}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default MemberCard;