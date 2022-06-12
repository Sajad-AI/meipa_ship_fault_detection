import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

type Props = {
  title?: string;
  subtitle?: string;
  element?: JSX.Element;
};

function Main({ title, subtitle, element }: Props): JSX.Element {
  return (
    <Box component="main" sx={{ height: '100vh', flexGrow: 1, overflow: 'auto' }}>
      <Toolbar sx={{ padding: 0 }} />
      <Box p={2}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2" color="#818181">
          {subtitle}
        </Typography>
      </Box>
      <Box p={2}>{element}</Box>
    </Box>
  );
}

export default Main;
