import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';

function FDCC(): JSX.Element {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Fault Detection Correlation Coefficient (FDCC)
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={12 / 7}>
          <TextField fullWidth label="Load vs RPM" value="0.5" />
        </Grid>
        <Grid item xs={4} sm={12 / 7}>
          <TextField fullWidth label="Load vs Scav. Air Pressure" value="0.4" />
        </Grid>
        <Grid item xs={4} sm={12 / 7}>
          <TextField fullWidth label="Cylinder" value="0.5" />
        </Grid>
        <Grid item xs={4} sm={12 / 7}>
          <TextField fullWidth label="TC1 Tin Speed" value="0.4" />
        </Grid>
        <Grid item xs={4} sm={12 / 7}>
          <TextField fullWidth label="TC2 Tin Speed" value="0.0" />
        </Grid>
        <Grid item xs={4} sm={12 / 7}>
          <TextField fullWidth label="TC1 Speed ScavAP" value="0.0" />
        </Grid>
        <Grid item xs={4} sm={12 / 7}>
          <TextField fullWidth label="TC2 Speed ScavAP" value="0.0" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default FDCC;
