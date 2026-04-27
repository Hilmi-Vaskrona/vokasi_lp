interface NewsFilterProps {
  category: string
  setCategory: (value: string) => void
}

const NewsFilter = ({ category, setCategory }: NewsFilterProps) => {
  const categories = [
    { key: "all", label: "✦ Semua" },
    { key: "science", label: "🔬 Sainstek" },
    { key: "religion", label: "🕌 Pojok Dakwah" },
  ]

  return (
    <div className="flex flex-wrap gap-3 mb-10 justify-center">
      {categories.map((c) => (
        <button
          key={c.key}
          onClick={() => setCategory(c.key)}
          className={`
            px-6 py-2.5 rounded-full font-semibold text-sm
            transition-all duration-300 ease-out
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
            ${category === c.key
              ? "bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white shadow-lg shadow-blue-200 scale-105"
              : "bg-white border border-gray-200 text-[#64748B] hover:border-blue-300 hover:text-[#2563EB] hover:shadow-md hover:scale-105"
            }
          `}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}

export default NewsFilter
