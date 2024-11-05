import cn from "@utils/class-names";
import { Oval } from "react-loader-spinner";

type CustomButtonProps = {
  isLoading?: boolean;
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  className?: string;
  disabled?: boolean;
};

const Button = ({
  isLoading,
  text,
  onClick,
  className,
  type = "button",
  disabled,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        `flex w-full justify-center items-center rounded-md px-[20px] py-[8px] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200 ease-in-out  hover:bg-black/90 text-gray-100 bg-black/80   text-2xs  font-medium`,
        className
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <Oval height={25} width={25} color="#ffffff" secondaryColor="grey" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
