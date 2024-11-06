import Button from "@components/button";
import SingleProductLoader from "@components/single-product-loader";
import StarBox from "@components/start-box";
import { addToCart, getProduct } from "@features/api/services";
import { CartProduct } from "@features/api/services/type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { queryClient } from "../../../main";

const Page = () => {
  const { slug } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug as string),
  });

  const [count, setCount] = useState<number>(1);

  const { mutateAsync: addCart, isPending } = useMutation({
    mutationKey: ["add-product", slug],
    mutationFn: (data: CartProduct) => addToCart(data),
    onSuccess() {
      toast.success("Product Added to Cart");
      queryClient.refetchQueries({
        queryKey: ["cart"],
      });
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col w-[100%] min-h-[88vh] justify-start md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] sm:py-[30px] py-[15px]">
        <SingleProductLoader />
      </div>
    );
  }
  return (
    <div className="flex flex-col w-[100%] min-h-[88vh] justify-start md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] sm:py-[30px] py-[15px]">
      <div className="flex flex-col bg-white w-[100%] px-[10%] py-5 gap-[10px] shadow-md rounded-[5px]">
        <div className="flex sm:flex-row flex-col  gap-[50px]">
          <img
            src={data?.data?.images[0]}
            className="lg:w-[22%] md:w-[25%] sm:w-[30%] w-full aspect-square object-cover"
          />
          <div className="flex flex-col gap-2">
            <h2 className="sm:text-md text-rg font-sb text-text-500 leading-[120%]">
              {data?.data?.title}
            </h2>
            <h3 className="sm:text-xs text-2xs font-mb text-text-300">
              {data?.data?.brand.name}
            </h3>
            <StarBox rating={Number(data?.data?.ratings)} />
            <div className="flex flex-row items-center gap-3">
              {data?.data?.strikePrice != data?.data?.price && (
                <h2 className="sm:text-md text-rg font-sb text-brand-700/60 line-through">
                  ${data?.data?.strikePrice}
                </h2>
              )}
              <h2 className="sm:text-md text-rg font-sb text-brand-700">
                ${data?.data?.price}
              </h2>
            </div>
            {data?.data?.minOrder == 0 && (
              <p className="text-2xs text-text-200">
                This product is not out of stock
              </p>
            )}
            {data?.data?.minOrder != 0 && (
              <div className="flex flex-row items-center gap-5">
                <Button
                  className="text-xs"
                  onClick={() => {
                    setCount(count - 1);
                  }}
                  disabled={count == 1}
                  text="-"
                />

                <h3 className="sm:text-2xs text-xs font-sb text-text-500">
                  {count}
                </h3>
                <Button
                  className="text-xs"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  disabled={count >= data?.data?.maxOrder!}
                  text="+"
                />
              </div>
            )}
            <Button
              text="Add to Cart"
              className={`w-52 ${
                data?.data?.minOrder == 0
                  ? "opacity-[0.2] cursor-not-allowed"
                  : ""
              }`}
              isLoading={isPending}
              onClick={async () => {
                if (data?.data?.minOrder != 0) {
                  await addCart({
                    product: data?.data?._id!,
                    quantity: count,
                    variantType: "None",
                  });
                }
              }}
            />
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
