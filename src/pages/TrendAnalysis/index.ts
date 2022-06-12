import MainEngine from './MainEngine';
import GeneratorEngine from './GeneratorEngine';
import HeatExchanger from './HeatExchanger';
import PumpsAndMotors from './PumpsAndMotors';

const childRoutes = {
  MainEngine: MainEngine,
  GeneratorEngine: GeneratorEngine,
  HeatExchanger: HeatExchanger,
  PumpsAndMotors: PumpsAndMotors
};

export default childRoutes;
