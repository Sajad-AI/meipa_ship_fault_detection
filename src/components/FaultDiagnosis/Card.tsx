import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Circle from '@mui/icons-material/Circle';

type diagnosItemType = { title: string };
type diagnosListType = diagnosItemType[];

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

function FaultDiagnosisCard({ title }: { title: string }): JSX.Element {
  return (
    <Card sx={{ backgroundColor: '#E5E5E5' }}>
      <CardHeader subheader={title} />
      <CardContent sx={{ pt: 0 }}>
        <DiagnosList diagnosList={diagnosList} />
      </CardContent>
    </Card>
  );
}

function DiagnosList({ diagnosList }: { diagnosList: diagnosListType }): JSX.Element {
  return (
    <List disablePadding>
      {diagnosList.map((diagnosItem, index) => (
        <DiagnosItem key={index} {...diagnosItem} />
      ))}
    </List>
  );
}

function DiagnosItem({ title }: diagnosItemType): JSX.Element {
  return (
    <ListItem disablePadding>
      <ListItemIcon sx={{ minWidth: '2rem' }}>
        <Circle sx={{ width: '1rem', height: '1rem', color: '#C0C0C0' }} />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}

export default FaultDiagnosisCard;
