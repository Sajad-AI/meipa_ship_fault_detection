import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import FaultState from '../../components/Common/FaultState';
import FaultDetectionChart from '../../components/FaultDetection/Chart';
import SelectEngine from '../../components/FaultDetection/SelectEngine';
import FDCC from '../../components/FaultDetection/FDCC';
import CycleFaultCounter from '../../components/FaultDetection/CycleFaultCounter';

function FaultDetection(): JSX.Element {
  return (
    <Stack spacing={3} divider={<Divider />}>
      <SelectEngine />
      <Stack spacing={2}>
        <FDCC />
        <CycleFaultCounter />
      </Stack>
      <FaultState title="Fault states" />
      <FaultDetectionChart />
    </Stack>
  );
}

export default FaultDetection;
