import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductLoader() {
  const SkeletonCard = () => {
    return (
      <div className="flex flex-col gap-1 w-full bg-white p-4 shadow-md rounded-[5px]">
        <Skeleton style={{ width: "100%", aspectRatio: "1/1.2" }} />
        <Skeleton count={3} />
      </div>
    );
  };

  return (
    <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] py-[30px] bg-background/50">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

export default ProductLoader;
