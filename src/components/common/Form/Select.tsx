import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type Props = {
  value: string;
  setValue: (value: string) => void;
  label: string;
  sx?: object;
  fullWidth?: boolean;
};

function CustomSelect({ value, setValue, label, sx, fullWidth }: Props): JSX.Element {
  return (
    <FormControl fullWidth={fullWidth} sx={sx}>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={(event) => setValue(event.target.value)}
      >
        <MenuItem value={value}>{value}</MenuItem>
        <MenuItem value={'RPM2'}>RPM 2</MenuItem>
        <MenuItem value={'RPM3'}>RPM 3</MenuItem>
      </Select>
    </FormControl>
  );
}

CustomSelect.defaultProps = {
  fullWidth: false
};

export default CustomSelect;
