import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';

import Circle from '@mui/icons-material/Circle';

type StateItem = {
  title: string;
  variant: 'success' | 'error';
};

type StateList = StateItem[];

function FaultState({ title, stateList }: { title: string; stateList: StateList }): JSX.Element {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <StateList states={stateList} />
    </Box>
  );
}

function StateList({ states }: { states: StateList }): JSX.Element {
  return (
    <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
      {states.map((state: StateItem, index: number) => (
        <StateItem key={index} {...state} />
      ))}
    </Stack>
  );
}

function StateItem({ title, variant }: StateItem): JSX.Element {
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
      color={variant}
    />
  );
}

export type { StateList };

export default FaultState;
