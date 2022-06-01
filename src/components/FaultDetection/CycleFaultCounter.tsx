import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableView from '@mui/icons-material/TableView';

function CycleFaultCounter(): JSX.Element {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Cycle Fault Counter
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={2}>
          <TextField fullWidth label="6 Cycle Engine" value="3" />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField fullWidth label="8 Cycle Engine" value="4" />
        </Grid>
        <Grid item xs={4} sm={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" startIcon={<TableView />}>
            CC Table
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CycleFaultCounter;
