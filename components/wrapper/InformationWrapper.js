import { useDispatch, useSelector } from "react-redux";
import { informationFetch } from "../../redux/actions/creator/information";
import CircularLoad from "../loading/CircularLoad";
import InformationCard from "../card/InformationCard";

const InformationWrapper = () => {
	const dispatch = useDispatch();
	const informations = useSelector((state) => state.informations);
	const loading = useSelector((state) => state.loading);

	React.useEffect(() => {
		dispatch(informationFetch());
	}, []);
	return (
		<div className="w-full flex flex-wrap justify-center items-center mt-4">
			{loading ? (
				<CircularLoad></CircularLoad>
			) : (
				<div className="w-full lg:w-1/2 flex flex-wrap justify-center">
					{informations.map((item, index) => (
						<InformationCard key={index} item={item}></InformationCard>
					))}
				</div>
			)}
		</div>
	);
};

export default React.memo(InformationWrapper);
