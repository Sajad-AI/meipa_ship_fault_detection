import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import DiagnosAndRecommendations from '../../components/common/DiagnosAndRecommendations';
import KeyValueTable, { KeyValueTableRows } from '../../components/common/KeyValueTable';
import Table, { TableHeader, TableRows } from '../../components/common/Table';

const tableHeader: TableHeader = [
  'Cyl 1',
  'Cyl 2',
  'Cyl 3',
  'Cyl 4',
  'Cyl 5',
  'Cyl 6',
  'TC Tin',
  'TC Tout'
];

const tableRows: TableRows = [
  ['Status', 'success', 'success', 'success', 'success', 'error', 'error', 'error', 'error'],
  ['Fuel Valve', 1000, 0, 0, 0, 0, 0],
  ['Piston Running Hrs', 3000, 0.04564, 584.2, 584.2, 584.2, 584.2],
  ['CC Bwt Load and cylinder', -0.2554, 0.04564, 88.0, 88.0, 88.0, 88.0],
  ['Average cc btwn load-cyl', '', 0.85654]
];

const diagnosList = [
  {
    title: 'CC between Load (kW) and TC Input Temp is lower (-1.00) than FDCC (0.50)'
  },
  {
    title: 'Cyl No. 6 Fault: Fuel V run hrs - 0, Fuel V remain hrs = 100'
  },
  {
    title: 'Cyl No. 6 Fault: Fuel V run hrs - 0, Fuel V remain hrs = 100'
  }
];

const recomendationList = [
  {
    title: 'Renew Cyl No. 6 fuel valve before new voyage'
  },
  {
    title: 'Renew Cyl No. 6 fuel valve before new voyage'
  },
  {
    title: 'Renew Cyl No. 6 fuel valve before new voyage'
  }
];

const FDCCLevel: KeyValueTableRows = [
  [['FDCC kW-Cyl Texh', 0.4]],
  [['FDCC Cyl Texh', 0.5]],
  [['FDCC kW-TC Tin', 0.5]],
  [['FDCC kW-TC Tout', 0.5]]
];

const TCAirFilter: KeyValueTableRows = [[['Reference hours', 510]], [['Run hours', 200]]];

const G1CCLoadTC: KeyValueTableRows = [[['kW-TC input Temp', -1]], [['kw-tc output temp', -1]]];

function FaultDiagnosis(): JSX.Element {
  return (
    <Stack spacing={3} divider={<Divider />}>
      <Table header={tableHeader} rows={tableRows} />
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={10} sm={5}>
            <Typography variant="subtitle1" marginBottom={1}>
              FDCC Level
            </Typography>
            <KeyValueTable rows={FDCCLevel} />
          </Grid>
          <Grid item xs={10} sm={5}>
            <Typography variant="subtitle1" marginBottom={1}>
              TC Air Filter
            </Typography>
            <KeyValueTable rows={TCAirFilter} />
          </Grid>
          <Grid item xs={10} sm={5}>
            <Typography variant="subtitle1" marginBottom={1}>
              G1CC Load-TC
            </Typography>
            <KeyValueTable rows={G1CCLoadTC} />
          </Grid>
        </Grid>
      </Box>
      <DiagnosAndRecommendations diagnosList={diagnosList} recommendationList={recomendationList} />
    </Stack>
  );
}

export default FaultDiagnosis;
