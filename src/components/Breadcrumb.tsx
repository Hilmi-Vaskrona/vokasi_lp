const Breadcrumb = ({ items }: { items: string[] }) => {
  return (
    <nav className="text-xs text-[#64748B] mb-2">
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <span
              className={`font-medium transition-colors duration-200 ${
                index !== items.length - 1
                  ? "text-[#2563EB] hover:text-[#1D4ED8] cursor-pointer"
                  : "text-[#0F172A] font-semibold"
              }`}
            >
              {index === 0 ? "🏠 " : ""}{item}
            </span>
            {index !== items.length - 1 && (
              <span className="text-[#CBD5E1] text-[10px] font-bold select-none">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

