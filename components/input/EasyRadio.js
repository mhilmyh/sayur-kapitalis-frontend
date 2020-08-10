import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const EasyRadio = ({
	label = "",
	name = "",
	value = 0,
	onChange = () => {},
	data = [],
	row = true,
}) => {
	return (
		<div className="px-1 w-full mb-2">
			<FormControl component="fieldset">
				<FormLabel
					component="legend"
					className="uppercase text-gray-700 text-xs font-bold"
				>
					{label}
				</FormLabel>
				<RadioGroup name={name} value={value} onChange={onChange} row={row}>
					{data.map((item, index) => (
						<FormControlLabel
							key={index}
							value={item.value}
							control={<Radio color="primary" size="small" />}
							label={item.label}
							className="capitalize text-gray-700"
						/>
					))}
				</RadioGroup>
			</FormControl>
		</div>
	);
};

export default React.memo(EasyRadio);
