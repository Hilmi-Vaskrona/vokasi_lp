const NewsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)] flex flex-col"
        >
          {/* Image skeleton */}
          <div className="w-full h-56 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />

          {/* Content skeleton */}
          <div className="p-6 flex flex-col gap-4 flex-1">
            {/* Date */}
            <div className="h-3 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-full w-1/3 animate-pulse" />
            {/* Title */}
            <div className="space-y-2">
              <div className="h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-full w-full animate-pulse" />
              <div className="h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-full w-4/5 animate-pulse" />
            </div>
            {/* Description */}
            <div className="space-y-2 flex-1">
              <div className="h-3.5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-full w-full animate-pulse" />
              <div className="h-3.5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-full w-5/6 animate-pulse" />
              <div className="h-3.5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-full w-2/3 animate-pulse" />
            </div>
            {/* Button */}
            <div className="h-11 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 rounded-2xl animate-pulse mt-2" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsSkeleton
