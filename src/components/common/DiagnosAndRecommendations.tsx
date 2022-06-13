import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ListCard, { List } from './ListCard';

type Props = {
  diagnosList: List;
  recommendationList: List;
};

function DiagnosAndRecommendations({ diagnosList, recommendationList }: Props): JSX.Element {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Diagnos And Recommendations
      </Typography>
      <ListCard title="Diagnos" list={diagnosList} />
      <ListCard title="Recommendations" list={recommendationList} />
    </Stack>
  );
}

export default DiagnosAndRecommendations;
