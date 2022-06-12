import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TableView from '@mui/icons-material/TableView';

import FireGSCharts from '../../components/OtherPPAndMotor/FireGS/Charts';
import FaultState, { StateList } from '../../components/common/FaultState';
import Select from '../../components/common/Form/Select';

const statusList: StateList = [
  {
    title: 'Fire GS PP & Mtr',
    variant: 'success'
  },
  {
    title: 'FW PP & Mtr',
    variant: 'error'
  },
  {
    title: 'Main CSWPP & Mtr',
    variant: 'error'
  }
];

function FireGS(): JSX.Element {
  const [item, setItem] = useState('Generator Engine #1');

  return (
    <Stack spacing={3}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Select label="Generator Engine" value={item} setValue={setItem} />
        <Button variant="outlined" startIcon={<TableView />}>
          SD Table
        </Button>
      </Box>
      <Box>
        <FireGSCharts />
      </Box>
      <Divider />
      <Box>
        <FaultState title="Status" stateList={statusList} />
      </Box>
    </Stack>
  );
}

export default FireGS;
