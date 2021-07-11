import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../redux/orderRedux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Cart.module.scss';

const Cart = () => {
  const products = useSelector(getProducts);
  const emptyCart = <Alert severity='info' variant='outlined'>Your cart is empty.</Alert>;

  return (
    <Paper className={styles.root}>
      <Typography paragraph variant="h5" component="h2" align="center">Cart</Typography>
      {!products || products.length === 0 ? emptyCart : <div>
        <TableContainer className={styles.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Products</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map(({ id, name, price, amount }) => (
                <TableRow key={id}>
                  <TableCell component="th">{name}</TableCell>
                  <TableCell>{amount}</TableCell>
                  <TableCell>{amount * price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid align="right">
          <Button component={RouterLink} to='/order' variant='contained' color='primary' className={styles.button}>Order</Button>
        </Grid>
      </div>}
    </Paper>
  );
};

export default Cart;
