import Button from "@components/button";
import { updateCart } from "@features/api/services";
import { CartItem } from "@features/api/services/type";
import { useAppSelector } from "@features/store";
import { useMutation } from "@tanstack/react-query";
import { totalCartItemFinder, totalPriceFinder } from "@utils/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { queryClient } from "../../main";

function Page() {
  const { carts } = useAppSelector((state) => state.Cart);
  const { mutateAsync: update, isPending } = useMutation({
    mutationKey: ["update-cart"],
    mutationFn: ({ itemId, quantity }: { itemId: string; quantity: number }) =>
      updateCart({
        itemId,
        quantity,
      }),
    onSuccess() {
      toast.success("Cart Updated");
      queryClient.refetchQueries({
        queryKey: ["cart"],
      });
    },
  });
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[100%] justify-center md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] sm:py-[30px] py-[15px]">
      <h2 className="text-md font-sb text-text-500 mt-3">Shopping Cart</h2>
      <div className="flex sm:flex-row flex-col-reverse w-full gap-5 items-start">
        <table className="bg-white sm:w-[70%] xs:w-[100%] w-[95%] sm:border-spacing-[20px] border-spacing-[15px] border-separate rounded-[5px] shadow-md">
          <thead>
            <tr>
              <th className="sm:w-[5%] w-[3%] sm:text-2xs text-3xs font-sb text-text-500 text-start">
                S.N
              </th>
              <th className="w-[50%] sm:text-2xs text-3xs font-sb text-text-500 text-start">
                Product Detail
              </th>
              <th className="w-[10%] sm:text-2xs text-3xs font-sb text-text-500 text-start">
                Price
              </th>
              <th className="w-[10%] sm:text-2xs text-3xs font-sb text-text-500 text-start">
                Quantity
              </th>
              <th className="w-[10%] sm:text-2xs text-3xs font-sb text-text-500 text-start"></th>
            </tr>
          </thead>
          <tbody>
            {carts?.map((curr: CartItem | null, indx: number) => (
              <tr className="cursor-pointer">
                <td>{indx + 1}</td>
                <td
                  className="flex md:flex-row flex-col gap-3"
                  onClick={() => {
                    navigate(`/product/${curr?.product.slug}`);
                  }}
                >
                  <img
                    src={curr?.product.images[0]}
                    className="md:w-[15%] w-[50%] aspect-square object-cover"
                  />
                  <h3 className="text-3xs font-mb leading-[120%] text-text-500">
                    {curr?.product.title}
                    <br />
                  </h3>
                </td>
                <td className="text-3xs font-mb leading-[120%] text-text-500">
                  $ {Number(curr?.subTotal).toFixed(2)}
                </td>
                <td className="text-3xs font-mb leading-[120%] text-text-500">
                  <div className="flex gap-3 items-center">
                    <Button
                      isLoading={isPending}
                      className="text-xs px-0 w-[30px]"
                      onClick={async () => {
                        await update({
                          itemId: curr?._id!,
                          quantity: curr?.quantity! - 1,
                        });
                      }}
                      disabled={curr?.quantity == 0}
                      text="-"
                    />
                    <h2 className="font-semibold sm:text-2xs text-3xs">
                      {curr?.quantity}
                    </h2>
                    <Button
                      isLoading={isPending}
                      className="text-xs px-0 w-[30px]"
                      onClick={async () => {
                        await update({
                          itemId: curr?._id!,
                          quantity: curr?.quantity! + 1,
                        });
                      }}
                      text="+"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col bg-white sm:w-[30%] xs:w-[100%] w-[95%]  min-h-[200px] border-spacing-[20px] border-separate rounded-[5px] gap-2 shadow-md px-4 py-2">
          <h2 className="text-md font-sb text-text-500 mt-3 leading-[120%]">
            Cart Total
          </h2>
          <table className="w-full">
            <tbody>
              <tr>
                <td>Total</td>
                <td>{totalCartItemFinder(carts)}</td>
              </tr>
              <tr>
                <td className="w-[100%] h-[1px] bg-text-200 opacity-1"></td>
              </tr>
              <tr>
                <td>Sub Total</td>
                <td>${totalPriceFinder(carts).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Delivery Charge</td>
                <td>$10</td>
              </tr>
              <tr>
                <td className="w-[100%] h-[1px] bg-text-200 opacity-1"></td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${(totalPriceFinder(carts) + 10).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <button
            className="bg-text-300 hover:bg-text-400 text-light-400 text-3xs font-mb py-2 rounded-sm shadow-md"
            onClick={() => {
              alert("This Feature is not yet added.😅");
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
