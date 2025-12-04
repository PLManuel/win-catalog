export default function ServiceSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16 animate-fade-in">
      {/* Header Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4 animate-pulse">
        <div className="flex flex-col justify-center space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-win-borde rounded"></div>
            <div className="h-6 w-32 bg-win-borde rounded-full"></div>
          </div>
          <div className="h-8 bg-win-borde rounded w-3/4"></div>
          <div className="h-4 bg-win-borde rounded w-full"></div>
          <div className="h-4 bg-win-borde rounded w-5/6"></div>
          <div className="flex gap-2 mt-4">
            <div className="h-10 w-24 bg-win-borde rounded-lg"></div>
            <div className="h-10 w-24 bg-win-borde rounded-lg"></div>
          </div>
        </div>
        <div className="w-full h-64 bg-win-borde rounded-xl"></div>
      </div>

      {/* Sections Skeleton */}
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="space-y-4 animate-pulse">
          <div className="h-6 bg-win-borde rounded w-48"></div>
          <div className="space-y-2">
            <div className="h-4 bg-win-borde rounded w-full"></div>
            <div className="h-4 bg-win-borde rounded w-5/6"></div>
            <div className="h-4 bg-win-borde rounded w-4/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
