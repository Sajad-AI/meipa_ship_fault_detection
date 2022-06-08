import FaultDetection from '../pages/MainEngine/FaultDetection';
import RealTimeMonitoring from '../pages/MainEngine/RealTimeMonitoring';
import MainEngine from '../pages/MainEngine';
import FaultDiagnosis from '../pages/MainEngine/FaultDiagnosis';

type routesType = {
  path: string;
  title: string;
  subtitle: string;
  element: JSX.Element;
}[];

const routes: routesType = [
  {
    path: '/main-engine',
    title: 'Heat Exchanger > Jacket Cooling.Water (J.C.W.)',
    subtitle: 'Monitor J.C.W System',
    element: <MainEngine />
  },
  {
    path: '/real-time-monitoring',
    title: 'Main Engine > Real Time Monitoring',
    subtitle: 'Fault detection metrics in real time',
    element: <RealTimeMonitoring />
  },
  {
    path: '/fault-detection',
    title: 'Main Engine > Fault Detection',
    subtitle: 'Detect faults in the ship',
    element: <FaultDetection />
  },
  {
    path: '/fault-diagnosis',
    title: 'Main Engine > Fault Diagnosis',
    subtitle: 'Diagnose faults in the system',
    element: <FaultDiagnosis />
  }
];

export default routes;
