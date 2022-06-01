import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';

import SystemDataTable from './SystemDataTable';

function SystemData(): JSX.Element {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        System Data
      </Typography>
      <SystemDataTable />
    </Box>
  );
}

export default SystemData;
