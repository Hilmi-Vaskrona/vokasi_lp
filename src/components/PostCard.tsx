const PostCard = ({ post }: { post: { image: string; title: string; category: string; author: string } }) => {
  return (
    <div className="
      group flex flex-col md:flex-row gap-5
      bg-white rounded-2xl p-4
      border border-[#E2E8F0]
      shadow-[0_2px_16px_rgba(0,0,0,0.05)]
      hover:shadow-[0_10px_36px_rgba(37,99,235,0.13)]
      hover:-translate-y-1
      transition-all duration-300 ease-out
    ">
      {/* Thumbnail */}
      <div className="relative w-full h-48 md:w-48 md:h-36 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between gap-2 py-1">
        {/* Badge */}
        <span className="
          bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
          text-white text-[11px] font-bold uppercase tracking-wider
          px-3 py-1 rounded-full w-fit
          shadow-[0_2px_8px_rgba(37,99,235,0.3)]
        ">
          {post.category}
        </span>

        {/* Title */}
        <h3 className="
          text-base font-extrabold text-[#0F172A] leading-snug line-clamp-2
          group-hover:text-[#2563EB] transition-colors duration-200
        ">
          {post.title}
        </h3>

        {/* Author */}
        <p className="text-xs text-[#64748B] flex items-center gap-1.5 font-medium">
          <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">👤</span>
          {post.author}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
