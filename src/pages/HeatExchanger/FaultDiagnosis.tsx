import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import FaultState, { StateList } from '../../components/common/FaultState';
import DiagnosAndRecommendations from '../../components/common/DiagnosAndRecommendations';
import KeyValueTable, { KeyValueTableRows } from '../../components/common/KeyValueTable';
import Table, { TableHeader, TableRows } from '../../components/common/Table';

const faultStateList: StateList = [
  {
    title: 'Cooler Fault',
    variant: 'success'
  },
  {
    title: 'Filter Fault',
    variant: 'error'
  },
  {
    title: 'Mtr1 Fault',
    variant: 'error'
  },
  {
    title: 'Mtr2 Fault',
    variant: 'error'
  },
  {
    title: 'PP1 FLT',
    variant: 'error'
  },
  {
    title: 'PP2 FLT',
    variant: 'error'
  },
  {
    title: '3WV Fault',
    variant: 'success'
  }
];

const diagnosList = [
  {
    title: 'Cyl No. 6 Fault: Fuel V run hrs - 0, Fuel V remain hrs = 100'
  },
  {
    title: 'Cyl No. 6 Fault: Fuel V run hrs - 0, Fuel V remain hrs = 100'
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
  },
  {
    title: 'Renew Cyl No. 6 fuel valve before new voyage'
  }
];

const FDSDLeft: KeyValueTableRows = [
  [['PP Mtr 1', 1000]],
  [['PP 1 Input Pressure', 3000]],
  [['PP 2 Input Pressure', -0.2554]]
];

const FDSDRight: KeyValueTableRows = [
  [['J.C.W. PP Mtr 2', 0]],
  [['PP 1 Output Pressure', 584.2]],
  [['PP 2 Output Pressure', 88.0]]
];

const FDCCLeft: KeyValueTableRows = [
  [['Cooler I/O Temp', 0]],
  [['Cooler Input Temp 3WV', 584.2]],
  [['Cooler Output Temp 3WV', 88.0]]
];

const FDCCRight: KeyValueTableRows = [
  [['CLT I/O Temp', 0]],
  [['CLT Input Temp 3WV', 584.2]],
  [['CLT OUTPUT Temp 3WV', 88.0]]
];

const coolerTableHeader: TableHeader = ['Cooler Input Temp', 'Cooler Output temp'];
const coolerTableRows: TableRows = [
  ['Cooler output temp', 0.654364],
  ['3w Valve', -0.2554, -0.6544]
];

const MVSDLeft: KeyValueTableRows = [
  [['Motor 1 A MVSD', 0]],
  [['pp1 in pressure mvsd', 0]],
  [['pp1 outpressure mvsd', 0.35634]]
];

const MVSDRight: KeyValueTableRows = [
  [['motor2 a mvsd', 0]],
  [['pp2 Input pressure mvsd', 0]],
  [['pp2 output mvsd', 0.5465]]
];

const cltTableHeader: TableHeader = ['clt Input Temp', 'clt Output Temp'];
const cltTableRows: TableRows = [
  ['clt output temp', 0.654364],
  ['3w Valve', -0.2554, -0.6544]
];

function FaultDiagnosis(): JSX.Element {
  return (
    <Stack spacing={3} divider={<Divider />}>
      <FaultState title="Fault Detection in J.C.W. System" stateList={faultStateList} />
      <Box>
        <Grid container columnSpacing={5} rowSpacing={3}>
          <Grid item container xs={12} sm={6} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">FDSD</Typography>
            </Grid>
            <Grid item sm={6}>
              <KeyValueTable rows={FDSDLeft} />
            </Grid>
            <Grid item sm={6}>
              <KeyValueTable rows={FDSDRight} />
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={6} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">FDCC</Typography>
            </Grid>
            <Grid item sm={6}>
              <KeyValueTable rows={FDCCLeft} />
            </Grid>
            <Grid item sm={6}>
              <KeyValueTable rows={FDCCRight} />
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={12} rowSpacing={1} columnSpacing={5}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">CC and MVSD</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Table header={coolerTableHeader} rows={coolerTableRows} minWidth={0} />
            </Grid>
            <Grid item sm={6} container spacing={1}>
              <Grid item sm={6}>
                <KeyValueTable rows={MVSDLeft} />
              </Grid>
              <Grid item sm={6}>
                <KeyValueTable rows={MVSDRight} />
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <Table header={cltTableHeader} rows={cltTableRows} minWidth={0} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <DiagnosAndRecommendations diagnosList={diagnosList} recommendationList={recomendationList} />
    </Stack>
  );
}

export default FaultDiagnosis;
