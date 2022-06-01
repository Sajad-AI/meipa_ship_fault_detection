import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Logo(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="logo-box">
        <Typography component="span" letterSpacing={0.75} fontWeight={600} fontSize={20}>
          SF
        </Typography>
      </div>
      <Typography
        variant="h6"
        component="div"
        letterSpacing={0.75}
        fontWeight={600}
        fontSize={'1rem'}
        sx={{ flexGrow: 1, marginLeft: 1.5 }}
      >
        Ship Fault Detection System
      </Typography>
    </Box>
  );
}

export default Logo;
