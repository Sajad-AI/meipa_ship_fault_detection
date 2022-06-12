import MainEngine from '../pages/MainEngine';
import GeneratorEngine from '../pages/GeneratorEngine';
import HeatExchanger from '../pages/HeatExchanger';
import OtherPPAndMotor from '../pages/OtherPPAndMotor';
import OperationStatus from '../pages/OperationStatus';
import TrendAnalysis from '../pages/TrendAnalysis';

import walletIcon from '../assets/icons/wallet.svg';
import userListIcon from '../assets/icons/user-list.svg';
import thermometerIcon from '../assets/icons/thermometer-half.svg';
import barChartIcon from '../assets/icons/bar-chart.svg';
import ericssonIcon from '../assets/icons/ericsson.svg';
import broadcastPinIcon from '../assets/icons/broadcast-pin.svg';

type Routes = {
  path: string;
  title?: string;
  subtitle?: string;
  element?: JSX.Element;
  nav: {
    title: string;
    icon?: JSX.Element;
  };
  children?: Routes;
}[];

const routes: Routes = [
  {
    path: 'main-engine',
    nav: {
      title: 'Main Engine',
      icon: <img src={walletIcon} alt="wallet" />
    },
    children: [
      {
        path: 'real-time-monitoring',
        title: 'Main Engine > Real Time Monitoring',
        subtitle: 'Fault detection metrics in real time',
        element: <MainEngine.RealTimeMonitoring />,
        nav: {
          title: 'Real Time Monitoring'
        }
      },
      {
        path: 'fault-detection',
        title: 'Main Engine > Fault Detection',
        subtitle: 'Detect faults in the ship',
        element: <MainEngine.FaultDetection />,
        nav: {
          title: 'M/E Fault Detect'
        }
      },
      {
        path: 'fault-diagnosis',
        title: 'Main Engine > Fault Diagnosis',
        subtitle: 'Diagnose faults in the system',
        element: <MainEngine.FaultDiagnosis />,
        nav: {
          title: 'Fault Diagnosis'
        }
      }
    ]
  },
  {
    path: 'generator-engine',
    nav: {
      title: 'Generator Engine',
      icon: <img src={userListIcon} alt="user-list" />
    },
    children: [
      {
        path: 'monitor-and-fault-detection',
        title: 'Generator Engine > Monitoring & Fault Detection',
        element: <GeneratorEngine.MonitorAndFaultDetection />,
        nav: {
          title: 'Monitor & Fault Detect'
        }
      },
      {
        path: 'fault-diagnosis',
        title: 'Generator Engine > Fault Diagnosis',
        element: <GeneratorEngine.FaultDiagnosis />,
        nav: {
          title: 'Gen Engine Diagnosis'
        }
      }
    ]
  },
  {
    path: 'heat-exchanger',
    nav: {
      title: 'Heat Exchanger',
      icon: <img src={thermometerIcon} alt="thermometer" />
    },
    children: [
      {
        path: 'fault-detection',
        title: 'Heat Exchanger > Jacket Cooling.Water (J.C.W.)',
        element: <HeatExchanger.FaultDetection />,
        nav: {
          title: 'M/E Fault Detect'
        }
      },
      {
        path: 'fault-diagnosis',
        title: 'Heat Exchanger > J.C.W. System Fault Diagnosis',
        element: <HeatExchanger.FaultDiagnosis />,
        nav: {
          title: 'Fault Diagnosis'
        }
      }
    ]
  },
  {
    path: 'other-pp-and-motor',
    nav: {
      title: 'Other PP & Motor',
      icon: <img src={ericssonIcon} alt="ericsson" />
    },
    children: [
      {
        path: 'fire-gs-fw-main-csw-motor',
        title: 'Other PP & Motor > Fire GS, FW, Main CSW Motor',
        element: <OtherPPAndMotor.FireGS />,
        nav: {
          title: 'Fire GS, FW, Main CSW Motor'
        }
      }
    ]
  },
  {
    path: 'operation-status',
    nav: {
      title: 'Operation Status',
      icon: <img src={broadcastPinIcon} alt="broadcast-pin" />
    },
    children: [
      {
        path: 'main-engine',
        title: 'Operation Status > Main Engine',
        element: <OperationStatus.MainEngine />,
        nav: {
          title: 'Main Engine'
        }
      },
      {
        path: 'generator-engine',
        title: 'Operation Status > Generator Engine',
        element: <OperationStatus.GeneratorEngine />,
        nav: {
          title: 'Gen Engine'
        }
      },
      {
        path: 'misc-operation',
        title: 'Operation Status > Misc Operation',
        element: <OperationStatus.MiscOperation />,
        nav: {
          title: 'Misc. Operation'
        }
      },
      {
        path: 'heat-exchange-motor-pump',
        title: 'Operation Status > Heat Exchange, Motor, pump',
        element: <OperationStatus.HeatExchangeMotorPump />,
        nav: {
          title: 'Heat Exch., Motor, Pump'
        }
      }
    ]
  },
  {
    path: 'trend-analysis',
    nav: {
      title: 'Trend Analysis',
      icon: <img src={barChartIcon} alt="bar-chart" />
    },
    children: [
      {
        path: 'main-engine',
        title: 'Trend Analysis > Main Engine',
        element: <TrendAnalysis.MainEngine />,
        nav: {
          title: 'Main Engine'
        }
      },
      {
        path: 'generator-engine',
        title: 'Trend Analysis > Generator Engine',
        element: <TrendAnalysis.GeneratorEngine />,
        nav: {
          title: 'Gen Engine'
        }
      },
      {
        path: 'heat-exchanger',
        title: 'Trend Analysis > Heat Exchanger',
        element: <TrendAnalysis.HeatExchanger />,
        nav: {
          title: 'Heat Exchanger'
        }
      },
      {
        path: 'pumps-and-motors',
        title: 'Trend Analysis > Pumps and Motors',
        element: <TrendAnalysis.PumpsAndMotors />,
        nav: {
          title: 'Pumps & Motors'
        }
      }
    ]
  }
];

export default routes;
