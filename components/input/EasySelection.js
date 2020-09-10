import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const EasySelection = ({
  label = "",
  value = null,
  onChange = () => {},
  data = [],
  val = "",
  notChoosenText = "",
  printFunc = () => {},
}) => {
  return (
    <FormControl fullWidth={true}>
      <InputLabel shrink>{label}</InputLabel>
      <Select native value={value} onChange={onChange}>
        {data.map((item, index) => (
          <option key={index} value={item[val]}>
            {printFunc(item)}
          </option>
        ))}
        <option value={-1}>
          {!!notChoosenText ? notChoosenText : "Belum dipilih"}
        </option>
      </Select>
    </FormControl>
  );
};

export default React.memo(EasySelection);
