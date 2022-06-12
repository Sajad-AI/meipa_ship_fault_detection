import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import FaultState, { StateList } from '../../components/common/FaultState';
import FaultDetectionChart from '../../components/MainEngine/FaultDetection/Chart';
import SelectEngine from '../../components/MainEngine/FaultDetection/SelectEngine';
import FDCC from '../../components/MainEngine/FaultDetection/FDCC';
import CycleFaultCounter from '../../components/MainEngine/FaultDetection/CycleFaultCounter';

const faultStateList: StateList = [
  {
    title: 'Cylinder1',
    variant: 'success'
  },
  {
    title: 'Cylinder2',
    variant: 'error'
  },
  {
    title: 'Cylinder3',
    variant: 'error'
  },
  {
    title: 'Cyl4',
    variant: 'error'
  },
  {
    title: 'Cyl5',
    variant: 'error'
  },
  {
    title: 'Cyl6',
    variant: 'error'
  },
  {
    title: 'Cyl7',
    variant: 'success'
  },
  {
    title: 'Cyl8',
    variant: 'success'
  },
  {
    title: 'TC1 Tin Spd',
    variant: 'error'
  },
  {
    title: 'TC2 Tin Spd',
    variant: 'success'
  },
  {
    title: 'Ld: ScavAP',
    variant: 'success'
  },
  {
    title: 'Ld:RPM',
    variant: 'success'
  }
];

function FaultDetection(): JSX.Element {
  return (
    <Stack spacing={3} divider={<Divider />}>
      <SelectEngine />
      <Stack spacing={2}>
        <FDCC />
        <CycleFaultCounter />
      </Stack>
      <FaultState title="Fault states" stateList={faultStateList} />
      <FaultDetectionChart />
    </Stack>
  );
}

export default FaultDetection;
