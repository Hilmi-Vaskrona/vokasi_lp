interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage = 5,
  onPageChange,
}: PaginationProps) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">

      {/* Prev */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="
          px-4 py-2 rounded-full text-sm font-semibold
          border border-[#E2E8F0] text-[#64748B]
          hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-all duration-200
        "
      >
        ← Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            w-10 h-10 rounded-full text-sm font-bold
            transition-all duration-200 ease-out
            ${currentPage === page
              ? "bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] scale-110"
              : "border border-[#E2E8F0] text-[#64748B] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="
          px-4 py-2 rounded-full text-sm font-semibold
          border border-[#E2E8F0] text-[#64748B]
          hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-all duration-200
        "
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;

