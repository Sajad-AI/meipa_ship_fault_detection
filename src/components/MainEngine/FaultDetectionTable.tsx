import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

const rows = [
  [
    ['FDCC CLR Tin Tout', 159],
    ['FDCC CLR Tin 3WV', 120],
    ['FDCC CLR Tout 3WW', 100]
  ],
  [
    ['FDCC CLR Tin Tout', 159],
    ['FDCC CLR Tin 3WV', 120],
    ['FDCC CLR Tout 3WW', 100]
  ],
  [
    ['FDCC CLR Tin Tout', 159],
    ['FDCC CLR Tin 3WV', 120],
    ['FDCC CLR Tout 3WW', 100]
  ],
  [
    ['FDCC CLR Tin Tout', 159],
    ['FDCC CLR Tin 3WV', 120],
    ['FDCC CLR Tout 3WW', 100]
  ]
];

function FaultDetectionTable(): JSX.Element {
  return (
    <Stack spacing={2}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {row.map(([key, value], index) => {
                  return (
                    <TableCell key={index} align="center">
                      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Typography fontWeight="600">{key}</Typography>
                        <Typography>{value}</Typography>
                      </Box>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Alert severity="info" variant="outlined" sx={{ border: 0, justifyContent: 'flex-end' }}>
        <Typography variant="caption">
          Tin: Input Temperature | Tout: Output Temperature | Mtr: Motor | CLR: Cooler | 3WV: 3 Way
          Valve | Pin: Input Pressure | Pout: Output Pressure
        </Typography>
      </Alert>
    </Stack>
  );
}

export default FaultDetectionTable;
