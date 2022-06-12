import MainEngine from './MainEngine';
import MiscOperation from './MiscOperation';
import HeatExchangeMotorPump from './HeatExchangeMotorPump';
import GeneratorEngine from './GeneratorEngine';

const childRoutes = {
  MainEngine: MainEngine,
  GeneratorEngine: GeneratorEngine,
  MiscOperation: MiscOperation,
  HeatExchangeMotorPump: HeatExchangeMotorPump
};

export default childRoutes;
