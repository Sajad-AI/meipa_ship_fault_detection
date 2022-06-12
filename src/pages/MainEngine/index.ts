import FaultDetection from './FaultDetection';
import FaultDiagnosis from './FaultDiagnosis';
import RealTimeMonitoring from './RealTimeMonitoring';

const childRoutes = {
  FaultDetection: FaultDetection,
  FaultDiagnosis: FaultDiagnosis,
  RealTimeMonitoring: RealTimeMonitoring
};

export default childRoutes;
