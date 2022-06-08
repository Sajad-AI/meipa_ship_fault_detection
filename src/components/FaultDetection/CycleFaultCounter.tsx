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
import TableCell from '@mui/material/TableCell';
import TableView from '@mui/icons-material/TableView';
import CloseIcon from '@mui/icons-material/Close';

import CorelationCoefficientTable from './CorelationCoefficientTable';

const row = [
  ['FDCC Load-RPM', 26],
  ['FDCC Load-ScavAP', 26],
  ['FDCC Bwt Cyl Texh', 149.5]
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
                {row.map(([key, value], index) => {
                  return (
                    <TableCell
                      key={index}
                      component="div"
                      align="center"
                      sx={{ p: 1, pr: index !== row.length - 1 ? 3 : 0 }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Typography fontWeight="600">{key}</Typography>
                        <Typography sx={{ ml: 2 }}>{value}</Typography>
                      </Box>
                    </TableCell>
                  );
                })}
              </Box>
              <CorelationCoefficientTable />
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CycleFaultCounter;
