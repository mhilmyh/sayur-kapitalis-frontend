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
  label = "Select",
  value = -1,
  onChange = () => {},
  data = [],
  val = "id",
  notChoosenText = "Belum dipilih",
  printFunc = () => {},
}) => {
  return (
    <div className="px-2 py-4 w-full">
      <FormControl fullWidth={true}>
        <StyledInputLabel shrink>{label}</StyledInputLabel>
        <Select native value={value} onChange={onChange}>
          {data.map((item, index) => (
            <option key={index} value={item[val]}>
              {printFunc(item)}
            </option>
          ))}
          <option value={-1}>{notChoosenText}</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default React.memo(SuperEasySelection);
