import { Fragment } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Circle from '@mui/icons-material/Circle';

type KeyValueTableRow = [key: string, value: number | string];

type Props = {
  rows: KeyValueTableRow[][];
};

function KeyValueTable({ rows }: Props): JSX.Element {
  return (
    <TableContainer>
      <Table size="small">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {row.map(([key, value], index) => {
                return (
                  <Fragment key={index}>
                    <TableCell align="left" sx={{ fontWeight: 600 }}>
                      {key.toUpperCase()}
                    </TableCell>
                    <TableCell align={rows[0].length === 1 ? 'right' : 'left'}>
                      {value === 'success' || value === 'error' ? (
                        <Circle sx={{ width: '1rem', height: '1rem', mt: 0.5 }} color={value} />
                      ) : (
                        value
                      )}
                    </TableCell>
                  </Fragment>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export type KeyValueTableRows = Props['rows'];

export default KeyValueTable;
