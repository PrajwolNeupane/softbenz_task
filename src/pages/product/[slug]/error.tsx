import NoItem from "@assets/No Item.svg";

function Error() {
  return (
    <div className="flex flex-col w-[100%] justify-center items-center md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%]  py-5 overflow-y-hidden">
      <img src={NoItem} alt="No Item" className="sm:w-[350px] w-[300px]" />
      <h4 className="translate-y-[-100px] text-lg font-mb text-text-500">
        No Product Found
      </h4>
    </div>
  );
}

export default Error;
