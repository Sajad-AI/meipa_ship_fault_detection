import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FaultDiagnosisCard from './Card';

function DiagnosAndRecommendations(): JSX.Element {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Diagnos And Recommendations
      </Typography>
      <FaultDiagnosisCard title="Diagnos" />
      <FaultDiagnosisCard title="Recommendations" />
    </Stack>
  );
}

export default DiagnosAndRecommendations;
