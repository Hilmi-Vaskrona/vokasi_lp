const SidebarRecent = ({ items }: { items: Array<{ id: string | number; image: string; title: string }> }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Heading */}
      <div className="flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-gradient-to-b from-[#2563EB] to-[#1D4ED8]" />
        <h3 className="font-bold text-base text-[#0F172A]">Post Terbaru</h3>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-3">
        {items.map((post, idx) => (
          <div key={post.id}>
            <div className="flex items-start gap-3 group cursor-pointer">
              {/* Thumbnail */}
              <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-transparent group-hover:ring-[#2563EB]/30 transition-all duration-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <p className="
                text-xs font-semibold text-[#0F172A] leading-snug line-clamp-2
                group-hover:text-[#2563EB] transition-colors duration-200 pt-0.5
              ">
                {post.title}
              </p>
            </div>

            {/* Divider */}
            {idx < items.length - 1 && (
              <div className="mt-3 border-t border-[#F1F5F9]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarRecent;

