import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import MainEngineCharts from '../../components/MainEngine/Charts';
import FaultState from '../../components/Common/FaultState';
import FaultDetectionTable from '../../components/MainEngine/FaultDetectionTable';

function MainEngine(): JSX.Element {
  return (
    <Stack spacing={3} divider={<Divider />}>
      <MainEngineCharts />
      <Box>
        <FaultState title="J.C.W Cooling System Fault Detection" />
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          J.C.W. System: Fault Detection Corelation Coefficient (FDCC), Fault Detection Standard
          Deviation (FDSD)
        </Typography>
        <FaultDetectionTable />
      </Box>
    </Stack>
  );
}

export default MainEngine;
