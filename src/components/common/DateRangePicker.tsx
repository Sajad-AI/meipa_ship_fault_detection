import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DateRangePicker() {
  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack direction="row" spacing={2}>
        <DatePicker
          label="From"
          value={from}
          onChange={(newFrom) => {
            setFrom(newFrom);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="To"
          value={to}
          onChange={(newTo) => {
            setTo(newTo);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default DateRangePicker;
