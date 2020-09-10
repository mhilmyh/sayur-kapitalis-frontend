import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { headingFetch } from "../../redux/actions/creator/information";
import Link from "next/link";

const Item = ({ item = {} }) => {
  return (
    <Link href="/info">
      <div className="w-full relative cursor-pointer">
        <img
          src={item.image_url}
          className="w-full bg-contain object-contain rounded h-64"
        ></img>
        {/* <h2 className="w-full absolute bottom-0 mb-8 flex justify-center">
				<span className="bg-green-500 text-white font-semibold rounded p-4 shadow-lg">
					{item.title}
				</span>
			</h2> */}
      </div>
    </Link>
  );
};

const HeadingSection = () => {
  const dispatch = useDispatch();
  const headings = useSelector((state) => state.headings);
  React.useEffect(() => {
    dispatch(headingFetch());
  }, []);
  return (
    <div className="w-full flex justify-center items-center mb-4 h-100">
      <Carousel navButtonsAlwaysVisible={true} className="w-full">
        {!!headings &&
          headings.map((item, index) => <Item key={index} item={item}></Item>)}
      </Carousel>
    </div>
  );
};

export default React.memo(HeadingSection);
