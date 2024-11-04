import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

function StarBox({ rating }: { rating: number }) {
  if (rating >= 5) {
    return (
      <div className="flex flex-row gap-1">
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
      </div>
    );
  } else if (rating >= 4.5) {
    return (
      <div className="flex flex-row gap-1">
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStarHalfStroke className="star" />
      </div>
    );
  } else if (rating >= 4) {
    return (
      <div className="flex flex-row gap-1">
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaRegStar className="star" />
      </div>
    );
  } else if (rating >= 3.5) {
    return (
      <div className="flex flex-row gap-1">
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStarHalfStroke className="star" />
        <FaRegStar className="star" />
      </div>
    );
  } else if (rating >= 3) {
    return (
      <div className="flex flex-row gap-1">
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
      </div>
    );
  } else if (rating >= 2.5) {
    return (
      <div className="flex flex-row gap-1">
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStarHalfStroke className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
      </div>
    );
  } else if (rating >= 2) {
    return (
      <div className="flex flex-row gap-1">
        <FaStar className="star" />
        <FaStar className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
      </div>
    );
  } else if (rating >= 1.5) {
    return (
      <div className="flex flex-row gap-1">
        <FaStar className="star" />
        <FaStarHalfStroke className="star" />
        <FaStarHalfStroke className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
      </div>
    );
  } else if (rating >= 1) {
    return (
      <div className="flex flex-row gap-1">
        <FaStar className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" />
      </div>
    );
  }
}

export default StarBox;
