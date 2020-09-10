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
        <Select
          native
          value={value}
          onChange={onChange}
          color="primary"
          {...other}
        >
          <option value={0}>Belum dipilih</option>
          {data.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                <Typography>
                  {dataLabel ? item[dataLabel] : item.name}
                </Typography>
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default React.memo(Selection);
