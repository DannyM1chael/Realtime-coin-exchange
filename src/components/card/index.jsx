import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    marginRight: 20
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent style={{textAlign: 'center'}}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Selected Coin
        </Typography>
        <Typography variant="h5" component="h2">
          BTC
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          bitcoin
        </Typography>
        <Typography variant="h5" component="h2">
          USD
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          dollar USA
        </Typography>
      </CardContent>
    </Card>
  );
}
