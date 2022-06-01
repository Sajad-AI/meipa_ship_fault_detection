import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';

import Circle from '@mui/icons-material/Circle';

type stateType = { title: string; color: 'success' | 'error' };
type statesType = stateType[];

const states: statesType = [
  {
    title: 'Cyl1',
    color: 'success'
  },
  {
    title: 'Cyl2',
    color: 'error'
  },
  {
    title: 'Cyl3',
    color: 'error'
  },
  {
    title: 'Cyl4',
    color: 'error'
  },
  {
    title: 'Cyl5',
    color: 'error'
  },
  {
    title: 'Cyl6',
    color: 'error'
  },
  {
    title: 'Cyl7',
    color: 'success'
  },
  {
    title: 'Cyl8',
    color: 'success'
  },
  {
    title: 'TC1 Tin Spd',
    color: 'error'
  },
  {
    title: 'TC2 Tin Spd',
    color: 'success'
  },
  {
    title: 'Ld: ScavAP',
    color: 'success'
  },
  {
    title: 'Ld:RPM',
    color: 'success'
  }
];

function FaultState({ title }: { title: string }): JSX.Element {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <StateList states={states} />
    </Box>
  );
}

function StateList({ states }: { states: statesType }): JSX.Element {
  return (
    <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
      {states.map((state: stateType, index: number) => (
        <StateItem key={index} {...state} />
      ))}
    </Stack>
  );
}

function StateItem({ title, color }: stateType): JSX.Element {
  return (
    <Chip
      sx={{
        height: '2.5rem',
        borderRadius: 1,
        pl: 1,
        fontSize: '1rem',
        fontWeight: '700',
        mb: 1,
        mr: 1
      }}
      icon={<Circle sx={{ width: '1rem', height: '1rem', ml: 2 }} />}
      label={title}
      variant="outlined"
      color={color}
    />
  );
}

export default FaultState;
