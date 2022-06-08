import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  name: string,
  load: number | string,
  rpm: number | string,
  cyl1: number | string,
  cyl2: number | string,
  cyl3: number | string,
  cyl4: number | string,
  cyl5: number | string,
  cyl6: number | string,
  tc1Tin: number | string,
  tc1Texh: number | string,
  tc1Speed: number | string
) {
  return { name, load, rpm, cyl1, cyl2, cyl3, cyl4, cyl5, cyl6, tc1Tin, tc1Texh, tc1Speed };
}

const rows = [
  createData('RPM', 159, '', '', '', '', '', '', '', '', '', ''),
  createData('Cyl 1 Texh', 237, 9.0, '', '', '', '', '', '', '', '', ''),
  createData('Cyl 2 Texh', 262, 16.0, 24, '', '', '', '', '', '', '', ''),
  createData('Cyl 3 Texh', 305, 3.7, 67, 4.3, 10, '', '', '', '', '', ''),
  createData('Cyl 4 Texh', 305, 3.7, 67, 4.3, 10, 12, '', '', '', '', ''),
  createData('Cyl 5 Texh', 305, 3.7, 67, 4.3, 10, 20, 23, '', '', '', ''),
  createData('Cyl 6 Texh', 305, 3.7, 67, 4.3, 10, 20, 45, 55, '', '', ''),
  createData('TC1 Tin', 305, 3.7, 67, 4.3, 10, 20, 30, 12, 22, '', ''),
  createData('TC1 Texh', 305, 3.7, 67, 4.3, 10, 20, 30, 40, 12, 78, ''),
  createData('TC1 Speed', 305, 3.7, 67, 4.3, 10, 20, 30, 40, 50, 13, 89)
];

function CorelationCoefficientTable(): JSX.Element {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 1250 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Load</TableCell>
            <TableCell align="center">RPM</TableCell>
            <TableCell align="center">Cyl 1 Texh</TableCell>
            <TableCell align="center">Cyl 2 Texh</TableCell>
            <TableCell align="center">Cyl 3 Texh</TableCell>
            <TableCell align="center">Cyl 4 Texh</TableCell>
            <TableCell align="center">Cyl 5 Texh</TableCell>
            <TableCell align="center">Cyl 6 Texh</TableCell>
            <TableCell align="center">TC1 Tin</TableCell>
            <TableCell align="center">TC1 Texh</TableCell>
            <TableCell align="center">TC1 Speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.load}</TableCell>
              <TableCell align="center">{row.rpm}</TableCell>
              <TableCell align="center">{row.cyl1}</TableCell>
              <TableCell align="center">{row.cyl2}</TableCell>
              <TableCell align="center">{row.cyl3}</TableCell>
              <TableCell align="center">{row.cyl4}</TableCell>
              <TableCell align="center">{row.cyl5}</TableCell>
              <TableCell align="center">{row.cyl6}</TableCell>
              <TableCell align="center">{row.tc1Tin}</TableCell>
              <TableCell align="center">{row.tc1Texh}</TableCell>
              <TableCell align="center">{row.tc1Speed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CorelationCoefficientTable;
