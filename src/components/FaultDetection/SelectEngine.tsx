import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PlayArrow from '@mui/icons-material/PlayArrow';

function SelectEngine(): JSX.Element {
  const [item, setItem] = useState('_Load');
  const [item2, setItem2] = useState('Cyl1');

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Select engine CS System Items
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={2}>
          <FormControl fullWidth>
            <InputLabel id="item-select-label">Item</InputLabel>
            <Select
              labelId="item-select-label"
              id="item-select"
              value={item}
              label="Item 2"
              onChange={(event) => setItem(event.target.value)}
            >
              <MenuItem value={'_Load'}>_Load</MenuItem>
              <MenuItem value={'RPM2'}>RPM 2</MenuItem>
              <MenuItem value={'RPM3'}>RPM 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={2}>
          <FormControl fullWidth>
            <InputLabel id="item-2-select-label">Item 2</InputLabel>
            <Select
              labelId="item-2-select-label"
              id="item-2-select"
              value={item2}
              label="Item 2"
              onChange={(event) => setItem2(event.target.value)}
            >
              <MenuItem value={'Cyl1'}>Cyl1</MenuItem>
              <MenuItem value={'RPM2'}>RPM 2</MenuItem>
              <MenuItem value={'RPM3'}>RPM 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField fullWidth label="Correlation Coefficient" value="-0.15569" />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField fullWidth label="CC Average" value="0.134544" />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField fullWidth label="CC Standard Deviation" value="0.134544" />
        </Grid>
        <Grid item xs={6} sm={2} sx={{ display: 'flex' }}>
          <Button fullWidth variant="contained" endIcon={<PlayArrow />}>
            Run
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SelectEngine;
