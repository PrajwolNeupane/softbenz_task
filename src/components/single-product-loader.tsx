import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleProductLoader = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:items-start items-center bg-white w-[100%] px-[10%] py-5 gap-[50px] shadow-md rounded-[5px]">
      <Skeleton style={{ width: "25vw", height: "300px" }} />
      <div className="flex flex-col gap-2 items-start">
        <Skeleton style={{ width: "45vw", height: "50px" }} />
        <Skeleton style={{ width: "45vw", height: "120px" }} />
        <Skeleton style={{ width: "45vw", height: "30px" }} />
        <Skeleton style={{ width: "45vw", height: "30px" }} />
        <Skeleton style={{ width: "45vw", height: "30px" }} />
      </div>
    </div>
  );
};

export default SingleProductLoader;
