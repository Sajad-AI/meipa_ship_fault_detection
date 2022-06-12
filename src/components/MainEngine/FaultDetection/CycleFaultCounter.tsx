import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import TableView from '@mui/icons-material/TableView';
import CloseIcon from '@mui/icons-material/Close';

import Table, { TableRows, TableHeader } from '../../common/Table';
import KeyValueTable, { KeyValueTableRows } from '../../common/KeyValueTable';

const row: KeyValueTableRows = [
  [
    ['FDCC Load-RPM', 26],
    ['FDCC Load-ScavAP', 26],
    ['FDCC Bwt Cyl Texh', 149.5]
  ]
];

const tableHeader: TableHeader = [
  'Load',
  'RPM',
  'Cyl 1 Texh',
  'Cyl 2 Texh',
  'Cyl 3 Texh',
  'Cyl 4 Texh',
  'Cyl 5 Texh',
  'Cyl 6 Texh',
  'TC1 Tin',
  'TC1 Texh',
  'TC1 Speed'
];
const tableRows: TableRows = [
  ['RPM', 159, '', '', '', '', '', '', '', '', '', ''],
  ['Cyl 1 Texh', 237, 9.0, '', '', '', '', '', '', '', '', ''],
  ['Cyl 2 Texh', 262, 16.0, 24, '', '', '', '', '', '', '', ''],
  ['Cyl 3 Texh', 305, 3.7, 67, 4.3, 10, '', '', '', '', '', ''],
  ['Cyl 4 Texh', 305, 3.7, 67, 4.3, 10, 12, '', '', '', '', ''],
  ['Cyl 5 Texh', 305, 3.7, 67, 4.3, 10, 20, 23, '', '', '', ''],
  ['Cyl 6 Texh', 305, 3.7, 67, 4.3, 10, 20, 45, 55, '', '', ''],
  ['TC1 Tin', 305, 3.7, 67, 4.3, 10, 20, 30, 12, 22, '', ''],
  ['TC1 Texh', 305, 3.7, 67, 4.3, 10, 20, 30, 40, 12, 78, ''],
  ['TC1 Speed', 305, 3.7, 67, 4.3, 10, 20, 30, 40, 50, 13, 89]
];

function CycleFaultCounter(): JSX.Element {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Cycle Fault Counter
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={2}>
          <TextField fullWidth label="6 Cycle Engine" value="3" inputProps={{ readOnly: true }} />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField fullWidth label="8 Cycle Engine" value="4" inputProps={{ readOnly: true }} />
        </Grid>
        <Grid item xs={4} sm={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" startIcon={<TableView />} onClick={handleOpenDialog}>
            CC Table
          </Button>
          <Dialog open={dialogOpen} onClose={handleCloseDialog} fullWidth maxWidth="xl">
            <DialogTitle sx={{ m: 0, p: 2 }}>
              Main Engine Corelation Coefficient Table
              <IconButton
                aria-label="close"
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500]
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Grid item xs={12} sm={6}>
                  <KeyValueTable rows={row} />
                </Grid>
              </Box>
              <Table rows={tableRows} header={tableHeader} />
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CycleFaultCounter;
