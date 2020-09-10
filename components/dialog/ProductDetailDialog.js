import ProductImage from "../image/ProductImage";
import DialogWrapper from "../wrapper/DialogWrapper";
import { useDispatch } from "react-redux";
import { cartsAdd } from "../../redux/actions/creator/cart";
import PriceSection from "../section/PriceSection";
import DiscountTag from "../tag/DiscountTag";
import CircularLoad from "../loading/CircularLoad";

const ProductDetailDialog = ({
  open = false,
  onClose = () => {},
  ...product
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const handleClickToCart = (event) => {
    event.preventDefault();
    if (!!product.stock && !loading) {
      setLoading(true);
      setTimeout(() => {
        dispatch(cartsAdd(product));
        setLoading(false);
      }, 500);
    }
  };
  return (
    <DialogWrapper
      open={open}
      onClose={onClose}
      textYes="Tambah"
      onClickYes={handleClickToCart}
    >
      <div className="w-full relative">
        <ProductImage
          src={product.image_url}
          name={product.name}
        ></ProductImage>
        <div className="absolute top-0 right-0 m-4">
          <span className="inline bg-gray-200 rounded p-2 font-semibold mr-2">
            {product.category.name}
          </span>
          <span className="inline bg-gray-200 rounded p-2 font-semibold ml-2">
            {product.sub_category.name}
          </span>
        </div>
        <div className="absolute bottom-0 right-0 m-4">
          <div className="bg-gray-200 text-gray-100 bg-red-600 rounded font-semibold px-2 py-1">
            <span className="pr-1">Sisa</span>
            <span className="pl-1">{product.stock}</span>
          </div>
        </div>
      </div>
      <div className="p-8 w-full">
        {loading ? (
          <CircularLoad></CircularLoad>
        ) : (
          <article className="prose lg:prose-lg">
            <div className="w-full flex justify-between items-start">
              <div className="p-0 m-0">
                <h2 className="my-0 pr-4 text-green-500">{product.name}</h2>
                <PriceSection
                  price={product.price}
                  promoPrice={product.promo_price}
                ></PriceSection>
              </div>
              <div className="p-0 m-0">
                <DiscountTag
                  discount={product.promo_percentage}
                  absolute={false}
                  sizing={"lg"}
                ></DiscountTag>
              </div>
            </div>
            <span className="bg-yellow-400 p-2 rounded">{`Unit ${product.unit}`}</span>
            <p>{product.descriptions}</p>
          </article>
        )}
      </div>
    </DialogWrapper>
  );
};

export default React.memo(ProductDetailDialog);
