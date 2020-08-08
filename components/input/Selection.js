import {
	FormControl,
	InputLabel,
	InputBase,
	Select,
	MenuItem,
	Typography,
	withStyles,
} from "@material-ui/core";

const BootstrapInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		position: "relative",
		backgroundColor: theme.palette.background.paper,
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
}))(InputBase);

const Selection = ({
	entity = "",
	data = [],
	value = null,
	onChange = () => {},
	...other
}) => {
	return (
		<FormControl className="w-full max-w-xl h-full">
			<InputLabel shrink={true} className="text-green-500">
				{entity}
			</InputLabel>
			<Select
				value={value}
				onChange={onChange}
				color="primary"
				input={
					<BootstrapInput className="rounded shadow-md py-2 px-4 focus:bg-green-500" />
				}
				{...other}
			>
				<MenuItem value={0}>Semua</MenuItem>
				{data.map((item, index) => (
					<MenuItem key={index} value={item.id}>
						<Typography>{item.name}</Typography>
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default React.memo(Selection);
