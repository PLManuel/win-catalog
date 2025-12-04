export default function ServiceCardSkeleton() {
  return (
    <div className="border-win-borde group relative h-full w-full max-w-sm text-left bg-card rounded-lg p-4 border animate-pulse">
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3 gap-2">
          <div className="w-8 h-8 bg-win-borde rounded"></div>
          <div className="h-5 w-20 bg-win-borde rounded-full"></div>
        </div>

        <div className="h-4 bg-win-borde rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-win-borde rounded w-full mb-2"></div>

        <div className="space-y-1 mt-3">
          <div className="h-3 bg-win-borde rounded w-5/6"></div>
          <div className="h-3 bg-win-borde rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
