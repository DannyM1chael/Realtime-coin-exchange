import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(rank, name, price, marketcap, change) {
  return { rank, name, price, marketcap, change };
}

const rows = [
  createData(1, 'Bitcoin', 6230.41, 113.97, 0.44),
  createData(1, 'Bitcoin', 6230.41, 113.97, 0.44),
  createData(1, 'Bitcoin', 6230.41, 113.97, 0.44),
  createData(1, 'Bitcoin', 6230.41, 113.97, 0.44)
];

export default function SimpleTable({data}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Market Cap</TableCell>
            <TableCell align="right">Change(24Hr)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.marketcap}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
