import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PlayArrow from '@mui/icons-material/PlayArrow';

import Select from '../../common/Form/Select';

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
          <Select label="Item" value={item} setValue={setItem} fullWidth />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Select label="Item 2" value={item2} setValue={setItem2} fullWidth />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            fullWidth
            label="Correlation Coefficient"
            value="-0.15569"
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            fullWidth
            label="CC Average"
            value="0.134544"
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            fullWidth
            label="CC Standard Deviation"
            value="0.134544"
            inputProps={{ readOnly: true }}
          />
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
