import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import FaultState from '../../components/Common/FaultState';
import SystemData from '../../components/FaultDiagnosis/SystemData';
import DiagnosAndRecommendations from '../../components/FaultDiagnosis/DiagnosAndRecommendations';

function FaultDiagnosis(): JSX.Element {
  return (
    <Stack spacing={3} divider={<Divider />}>
      <FaultState title="Detect Fault State" />
      <SystemData />
      <DiagnosAndRecommendations />
    </Stack>
  );
}

export default FaultDiagnosis;
