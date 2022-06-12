import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Circle from '@mui/icons-material/Circle';

type TableHeader = string[];

type TableRows = (string | number)[][];

type Props = {
  header: TableHeader;
  rows: TableRows;
  minWidth?: number;
};

function CustomTable({ header, rows, minWidth }: Props): JSX.Element {
  return (
    <TableContainer>
      <Table sx={{ minWidth: minWidth }} size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {header.map((headTitle, index) => (
              <TableCell key={index} align="right" sx={{ fontWeight: 700 }}>
                {headTitle.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                {row[0].toString().toUpperCase()}
              </TableCell>
              {row.slice(1).map((cell: any, cellIndex: any) => (
                <TableCell key={cellIndex} align="right">
                  {cell === 'success' || cell === 'error' ? (
                    <Circle sx={{ width: '1rem', height: '1rem', mt: 0.5 }} color={cell} />
                  ) : (
                    cell
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CustomTable.defaultProps = {
  minWidth: 800
};

export type { TableHeader, TableRows };

export default CustomTable;
