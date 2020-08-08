import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import useGlobal from "../../contexts/global";

const SearchBar = () => {
	const context = useGlobal();
	return (
		<div className="w-full px-8">
			<Paper
				component="form"
				className="px-2 py-1 my-4 w-full flex justify-center shadow-md"
			>
				<InputBase
					className="ml-2"
					fullWidth={true}
					placeholder="Mau belanja apa hari ini?"
					onChange={(e) => context.setSearch(e.target.value)}
					fontSize="8"
				></InputBase>
				<div className="p-2 text-green-500 flex justify-center items-center">
					<SearchIcon fontSize="small"></SearchIcon>
				</div>
			</Paper>
		</div>
	);
};

export default React.memo(SearchBar);
