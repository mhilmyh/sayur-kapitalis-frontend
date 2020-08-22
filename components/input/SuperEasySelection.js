import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core";

const StyledInputLabel = withStyles({
	root: {
		fontWeight: "700",
		color: "#4A5568",
		textTransform: "uppercase",
	},
})(InputLabel);

const SuperEasySelection = ({
	label = "",
	value = null,
	onChange = () => {},
	data = [],
	val = "",
	notChoosenText = "",
	printFunc = () => {},
}) => {
	return (
		<div className="px-2 py-4 w-full">
			<FormControl fullWidth={true}>
				<StyledInputLabel shrink>{label}</StyledInputLabel>
				<Select value={value} onChange={onChange}>
					{data.map((item, index) => (
						<MenuItem key={index} value={item[val]}>
							{printFunc(item)}
						</MenuItem>
					))}
					<MenuItem value={-1}>
						{!!notChoosenText ? notChoosenText : "Belum dipilih"}
					</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default React.memo(SuperEasySelection);
