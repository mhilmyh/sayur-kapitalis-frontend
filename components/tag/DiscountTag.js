const DiscountTag = ({ discount = 0, absolute = true, sizing = "sm" }) => {
  if (!!discount) {
    return (
      <div className={`${absolute ? "absolute" : ""} top-0 left-0 py-2`}>
        <div
          class={`ml-4 text-${sizing} inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-orange-200 text-orange-700 rounded-full`}
        >
          <div>{-Math.round((discount + Number.EPSILON) * 10) / 10}%</div>
        </div>
      </div>
    );
  }
  return null;
};

export default React.memo(DiscountTag);
