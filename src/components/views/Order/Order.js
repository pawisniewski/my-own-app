import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../redux/orderRedux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import RemoveIcon from '@material-ui/icons/Remove';

import OrderForm from '../../features/OrderForm/OrderForm';

import styles from './Order.module.scss';

const Order = () => {
  const products = useSelector(getProducts);

  const totalAmount = (products) => {
    let sum = 0;
    for (let product of products) {
      sum += product.amount;
    }
    return sum;
  };
  
  const totalCost = (products) => {
    let sum = 0;
    for (let product of products) {
      sum += (product.price * product.amount);
    }
    return sum;
  };

  const emptyCart = <Alert severity="info" variant="outlined">Your cart is empty now.</Alert>;

  return (
    <div>
      <Paper className={styles.root}>
        <Typography paragraph variant="h5" component="h2" align="center">Summary</Typography>
        {!products || products.length === 0 ? emptyCart : <div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow> 
                  <TableCell align="left">Products</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Cost</TableCell>
                  <TableCell align="center">Comment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(({ id, name, price, amount, comment }) => (
                  <TableRow key={id}>
                    <TableCell align="left">
                      <Typography className={styles.name}>{name}</Typography>
                    </TableCell>
                    <TableCell align="center">{amount}</TableCell>
                    <TableCell align="center">${price * amount}</TableCell>
                    <TableCell align="center" className={styles.comment}>
                      <IconButton size="small" disabled>
                        {comment ? <CommentIcon color="primary" /> : <RemoveIcon /> }
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" className={styles.total}><Typography color="secondary">Total</Typography></TableCell>
                  <TableCell align="center" className={styles.total}><Typography color="secondary">{totalAmount(products)}</Typography></TableCell>
                  <TableCell align="center" className={styles.total}><Typography color="secondary">${totalCost(products)}</Typography></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>}
      </Paper>
      <Paper className={styles.root}>
        <OrderForm />
      </Paper>
    </div>
  );
};

export default Order;
