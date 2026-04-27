interface NewsItem {
  title: string
  link: string
  source_id: string
  pubDate: string
  image_url: string
  description: string
}

const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <article className="
      group bg-white rounded-3xl overflow-hidden
      border border-gray-100
      shadow-[0_2px_20px_rgba(0,0,0,0.06)]
      hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)]
      hover:-translate-y-2
      transition-all duration-300 ease-out
      flex flex-col
    ">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        {/* Premium source badge */}
        <span className="
          absolute top-4 left-4
          bg-gradient-to-r from-[#2563EB] to-[#1E40AF]
          text-white text-[11px] font-bold uppercase tracking-wider
          px-3 py-1 rounded-full
          shadow-[0_2px_8px_rgba(37,99,235,0.4)]
        ">
          {item.source_id}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Date */}
        <span className="text-xs text-[#94A3B8] font-medium tracking-wide">
          🗓 {new Date(item.pubDate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
        </span>

        {/* Title */}
        <h2 className="font-extrabold text-lg text-[#0F172A] line-clamp-2 leading-snug group-hover:text-[#2563EB] transition-colors duration-200">
          {item.title}
        </h2>

        {/* Description */}
        <p className="text-[#64748B] text-sm line-clamp-3 leading-relaxed flex-1">
          {item.description || "Tidak ada deskripsi tersedia."}
        </p>

        {/* CTA Button */}
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-3 w-full text-center
            bg-gradient-to-r from-[#2563EB] to-[#1E40AF]
            hover:from-[#1E40AF] hover:to-[#1E3A8A]
            text-white font-bold text-sm py-3 rounded-2xl
            shadow-[0_4px_16px_rgba(37,99,235,0.3)]
            hover:shadow-[0_6px_24px_rgba(37,99,235,0.4)]
            transition-all duration-300 ease-out
            active:scale-95
          "
        >
          Baca Selengkapnya →
        </a>
      </div>
    </article>
  );
};
export default NewsCard;
