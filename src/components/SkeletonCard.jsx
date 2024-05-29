const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-5 w-72 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-48 bg-gray-200 animate-pulse"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
