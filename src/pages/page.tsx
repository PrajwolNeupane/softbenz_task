import { FC } from "react";
import StarBox from "@components/start-box";
import { useAppSelector } from "@features/store";

import ProductLoader from "@components/products-loader";
import { Link } from "react-router-dom";
import { Product } from "@features/api/services/type";

interface Props {}

let HomePage: FC<Props> = ({}) => {
  const { products } = useAppSelector((state) => state.Product);

  return (
    <>
      {products == null ? (
        <ProductLoader />
      ) : (
        <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] py-[30px]">
          {products?.map((curr: Product | null, indx: number) => (
            <Link
              to={`product/${curr?.slug}`}
              className="flex flex-col gap-1 w-full bg-white p-4 hover:shadow-md duration-300 ease-in-out rounded-[5px]"
              key={indx}
            >
              <img
                src={curr?.images[0]}
                className="mx-[auto] w-full aspect-square object-cover"
                loading="lazy"
              />
              <h4 className="font-sb text-xs text-text-500 mt-3 leading-[120%]">
                {curr?.title}
              </h4>
              <StarBox rating={Number(curr?.ratings)} />
              <h5 className="font-mb text-2xs text-text-200 ">
                {curr?.brand.name}
              </h5>
              <div className="flex gap-2">
                {curr?.strikePrice != curr?.price && (
                  <h3 className="text-brand-700/80 text-2xs font-sb line-through	">
                    ${curr?.strikePrice}
                  </h3>
                )}
                <h3 className="text-brand-700 text-2xs font-sb">
                  ${curr?.price}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
