import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Typography,
} from "@material-ui/core";

const Selection = ({
	entity = "",
	data = [],
	dataLabel = null,
	value = null,
	onChange = () => {},
	...other
}) => {
	return (
		<div className="w-full max-w-lg">
			<FormControl fullWidth={true} size="medium">
				<InputLabel shrink={true}>{entity}</InputLabel>
				<Select value={value} onChange={onChange} color="primary" {...other}>
					<MenuItem value={0}>Belum dipilih</MenuItem>
					{data.map((item, index) => {
						return (
							<MenuItem key={index} value={item.id}>
								<Typography>
									{dataLabel ? item[dataLabel] : item.name}
								</Typography>
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
};

export default React.memo(Selection);
