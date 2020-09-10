import { convertToRupiah } from "../../redux/utils/format";

const PriceSection = ({ price = "", promoPrice = "" }) => {
  if (!!promoPrice) {
    return (
      <div className="pb-2">
        <div className="text-gray-500 line-through">
          {convertToRupiah(price)}
        </div>
        <div className="text-gray-700 font-semibold">
          {convertToRupiah(promoPrice)}
        </div>
      </div>
    );
  }
  return (
    <p className="text-gray-700 font-semibold">{convertToRupiah(price)}</p>
  );
};

export default React.memo(PriceSection);
