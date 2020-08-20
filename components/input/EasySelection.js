import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const EasySelection = ({
	label = "",
	value = null,
	onChange = () => {},
	data = [],
	val = "",
	printFunc = () => {},
}) => {
	return (
		<FormControl fullWidth={true}>
			<InputLabel shrink>{label}</InputLabel>
			<Select value={value} onChange={onChange}>
				{data.map((item, index) => (
					<MenuItem key={index} value={item[val]}>
						{printFunc(item)}
					</MenuItem>
				))}
				<MenuItem value={-1}>Belum dipilih</MenuItem>
			</Select>
		</FormControl>
	);
};

export default React.memo(EasySelection);
