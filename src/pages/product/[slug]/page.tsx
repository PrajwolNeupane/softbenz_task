import SingleProductLoader from "@components/single-product-loader";
import StarBox from "@components/start-box";
import { getProduct } from "@features/api/services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useParams } from "react-router";

const Page = () => {
  const { slug } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug as string),
  });

  const [count, setCount] = useState<number>(1);

  if (isLoading) {
    return (
      <div className="flex flex-col w-[100%] min-h-[88vh] justify-start md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] sm:py-[30px] py-[15px] bg-background/50">
        <SingleProductLoader />
      </div>
    );
  }
  return (
    <div className="flex flex-col w-[100%] min-h-[88vh] justify-start md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] sm:py-[30px] py-[15px] bg-background/50">
      <div className="flex flex-col bg-white w-[100%] px-[10%] py-5 gap-[10px] shadow-md rounded-[5px]">
        <div className="flex gap-[50px]">
          <img
            src={data?.data?.images[0]}
            className="lg:w-[22%] md:w-[25%] sm:w-[30%] w-[40%] aspect-square object-cover"
          />
          <div className="flex flex-col gap-2 sm:items-start items-center">
            <h2 className="sm:text-md text-rg font-sb text-text-500 leading-[120%]">
              {data?.data?.title}
            </h2>
            <h3 className="sm:text-xs text-2xs font-mb text-text-300">
              {data?.data?.brand.name}
            </h3>
            <StarBox rating={Number(data?.data?.ratings)} />
            <h2 className="sm:text-md text-rg font-sb text-brand-700">
              $ {data?.data?.price}
            </h2>
            <div className="flex flex-row items-center gap-5">
              <button
                onClick={() => {
                  setCount(count - 1);
                }}
                disabled={count == 1}
              >
                <FiMinus className="sm:text-lg text-md text-text-500" />
              </button>
              <h3 className="sm:text-lg text-md font-sb text-text-500">
                {count}
              </h3>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <FiPlus className="sm:text-lg text-md text-text-500" />
              </button>
            </div>
            <button
              className="py-2 sm:w-[220px] w-[100%] text-white bg-text-300 hover:bg-text-400 shadow-md rounded-[5px]"
              onClick={() => {
                // dispatch(addCart({ ...productData!, quantity: count }));
                // setCartToStorage({ ...productData!, quantity: count });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <h3 className="text-text-500">Description</h3>
        <div
          className="sm:text-2xs text-3xs font-mb text-text-200 leading-[150%]"
          dangerouslySetInnerHTML={{
            __html: data?.data?.description as string,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Page;
