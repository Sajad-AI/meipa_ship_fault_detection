import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import KeyValueTable, { KeyValueTableRows } from '../../components/common/KeyValueTable';

const FOConsumptionLeft: KeyValueTableRows = [
  [['ge fo count', 1000]],
  [['gefo rtn count', 3000]],
  [['me ge fo count', 35]],
  [['me gefo supply', 24]],
  [['me fo consume', 120]]
];

const FOConsumptionRight: KeyValueTableRows = [
  [['blr fo rtn count', 0]],
  [['gefo supply', 584.2]],
  [['gefo rtn', 88.0]],
  [['blr fo supply', 88.0]],
  [['gefo consume', 88.2]]
];

const SternTubeShaftBrg: KeyValueTableRows = [
  [['STub Brg T aft', 0]],
  [['inter shaft brg temp', 584.2]]
];

const Boiler: KeyValueTableRows = [[['STub Brg T aft', 584.2]], [['inter shaft brg temp', 584.2]]];

const MEFOMisc: KeyValueTableRows = [
  [['M/E FO Input P', 1000]],
  [['M/E FO Input T', 3000]],
  [['M/E Cyl oil input t', 35]],
  [['m/e fo leak h', 24]]
];

const MELOFilterSumpTK: KeyValueTableRows = [
  [['M/E LO Filter P diff', 1000]],
  [['m/e LO Main B pas filter p diff', 3000]],
  [['me lo sump tk level', 35]],
  [['lo main filter', 24]]
];

const FireExtinguish: KeyValueTableRows = [
  [['fire mainline pressure', 1000]],
  [['M/E FO Input T', 3000]],
  [['M/E Cyl oil input t', 35]],
  [['m/e fo leak h', 24]]
];

const EngineRoom: KeyValueTableRows = [
  [['EnginRoom Temp', 1000]],
  [['engine Room pressure', 3000]]
];

const BoWThrusterBWTS: KeyValueTableRows = [
  [['Bow thrust abnormal', 'success']],
  [['bwts abnormal', 'success']]
];

const ShaftGenerator: KeyValueTableRows = [
  [['No 1 SG Run', 'success']],
  [['No 2 SG Run', 'success']],
  [['No1 sg mtr ovrload', 'success']],
  [['No2 sg mtr ovrload', 'success']]
];

const Draft: KeyValueTableRows = [
  [['fwrd draft', 1000]],
  [['min p draft', 3000]],
  [['mid s Draft', 3000]],
  [['aft draft', 3000]]
];

function MiscOperation(): JSX.Element {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle1">Star Ranger Main Engine Operation Status</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography fontWeight={600}>Date and time</Typography>
        <Typography marginLeft={5}>2022.05.28 10:30 AM</Typography>
      </Box>
      <Box>
        <Grid container columnSpacing={5} rowSpacing={3}>
          <Grid item container xs={12} sm={6} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">F.O Consumption</Typography>
            </Grid>
            <Grid item sm={6}>
              <KeyValueTable rows={FOConsumptionLeft} />
            </Grid>
            <Grid item sm={6}>
              <KeyValueTable rows={FOConsumptionRight} />
            </Grid>
          </Grid>
          <Grid item xs={8} sm={4}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" marginBottom={1}>
                Stern Tube Shaft Brg.
              </Typography>
              <KeyValueTable rows={SternTubeShaftBrg} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" marginTop={1}>
                Boiler
              </Typography>
              <KeyValueTable rows={Boiler} />
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={5}>
            <Grid item sm={6}>
              <Grid item sm={8}>
                <Typography variant="subtitle1" marginBottom={1}>
                  ME FO Misc
                </Typography>
                <KeyValueTable rows={MEFOMisc} />
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <Grid item sm={8}>
                <Typography variant="subtitle1" marginBottom={1}>
                  ME LO Filter Sump TK
                </Typography>
                <KeyValueTable rows={MELOFilterSumpTK} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={5}>
            <Grid item sm={6}>
              <Grid item sm={8}>
                <Typography variant="subtitle1" marginBottom={1}>
                  Fire Extinguish
                </Typography>
                <KeyValueTable rows={FireExtinguish} />
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <Grid item sm={8}>
                <Typography variant="subtitle1" marginBottom={1}>
                  Engine Room
                </Typography>
                <KeyValueTable rows={EngineRoom} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={5}>
            <Grid item sm={6}>
              <Grid item sm={8}>
                <Typography variant="subtitle1" marginBottom={1}>
                  BoW Thruster BWTS
                </Typography>
                <KeyValueTable rows={BoWThrusterBWTS} />
              </Grid>
              <Grid item sm={8} marginTop={2}>
                <Typography variant="subtitle1" marginBottom={1}>
                  Shaft Generator
                </Typography>
                <KeyValueTable rows={ShaftGenerator} />
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <Grid item sm={8}>
                <Typography variant="subtitle1" marginBottom={1}>
                  Draft
                </Typography>
                <KeyValueTable rows={Draft} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default MiscOperation;
