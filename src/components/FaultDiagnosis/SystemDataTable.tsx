import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  name: string,
  cyl1: number,
  cyl2: number,
  cyl3: number,
  cyl4: number,
  cyl5: number,
  cyl6: number,
  cyl7: number,
  refHrs: number
) {
  return { name, cyl1, cyl2, cyl3, cyl4, cyl5, cyl6, cyl7, refHrs };
}

const rows = [
  createData('Fuel Valve Running Hrs', 159, 6.0, 24, 4.0, 10, 20, 30, 40),
  createData('Piston Running Hrs', 237, 9.0, 37, 4.3, 10, 20, 30, 40),
  createData('CC Bwt Load', 262, 16.0, 24, 6.0, 10, 20, 30, 40),
  createData('CC Bwt scav. air pressure', 305, 3.7, 67, 4.3, 10, 20, 30, 40)
];

function SystemDataTable(): JSX.Element {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Cyl1</TableCell>
            <TableCell align="right">Cyl2</TableCell>
            <TableCell align="right">Cyl3</TableCell>
            <TableCell align="right">Cyl4</TableCell>
            <TableCell align="right">Cyl5</TableCell>
            <TableCell align="right">Cyl6</TableCell>
            <TableCell align="right">Cyl7</TableCell>
            <TableCell align="right">Ref Hrs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name.toUpperCase()}
              </TableCell>
              <TableCell align="right">{row.cyl1}</TableCell>
              <TableCell align="right">{row.cyl2}</TableCell>
              <TableCell align="right">{row.cyl3}</TableCell>
              <TableCell align="right">{row.cyl4}</TableCell>
              <TableCell align="right">{row.cyl5}</TableCell>
              <TableCell align="right">{row.cyl6}</TableCell>
              <TableCell align="right">{row.cyl7}</TableCell>
              <TableCell align="right">{row.refHrs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SystemDataTable;
