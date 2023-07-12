import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingPage() {
  return (
    <div>
      <div className="flex md:px-5">
        <div className="w-36 md:64 space-y-5">
          {[...Array(4)].map((_, i) => (
            <div className="border rounded-r-lg md:rounded-lg p-5" key={i}>
              <h1 className="font-bold">
                <Skeleton />
              </h1>
              <Skeleton count={Math.floor(Math.random() * 5) + 1} />
            </div>
          ))}
        </div>

        <div className="px-5 md:p-10 py-0 space-y-5 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <h2>Laoding Results From Google...</h2>
            <h2 className="font-extralight text-base animate-pulse text-blue-500">
              Scraping Real Results Via Oxylabs!
            </h2>
          </div>
          {[...Array(10)].map((item, i) => (
            <div className="p-5 border rounded-2xl" key={i}>
              <Skeleton count={2} />
              <br />
              <Skeleton count={1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
