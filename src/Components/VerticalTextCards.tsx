import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export interface VerticalCardProps {
    text: string;
    value: number;
    slider: any;
}

export default function VerticalCard(props: VerticalCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h1" color="primary">
          {props.value}
        </Typography>
        <Typography variant="h3" color="textSecondary" gutterBottom>
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
          {props.slider}
        {/* <Slider
            defaultValue={3}
            step={1}
            style={{ color: "darkcyan" }}
            min={5}
            valueLabelDisplay="on"
          /> */}
      </CardActions>
    </Card>
  );
}
