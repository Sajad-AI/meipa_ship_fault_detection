import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Circle from '@mui/icons-material/Circle';

type Item = {
  title: string;
};

type List = Item[];

function ListCard({ title, list }: { title: string; list: List }): JSX.Element {
  return (
    <Card sx={{ backgroundColor: '#E5E5E5' }}>
      <CardHeader subheader={title} />
      <CardContent sx={{ pt: 0 }}>
        <ListComponent list={list} />
      </CardContent>
    </Card>
  );
}

function ListComponent({ list }: { list: List }): JSX.Element {
  return (
    <List disablePadding>
      {list.map((item, index) => (
        <ItemComponent key={index} {...item} />
      ))}
    </List>
  );
}

function ItemComponent({ title }: Item): JSX.Element {
  return (
    <ListItem disablePadding>
      <ListItemIcon sx={{ minWidth: '2rem' }}>
        <Circle sx={{ width: '1rem', height: '1rem', color: '#C0C0C0' }} />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}

export type { List };

export default ListCard;
