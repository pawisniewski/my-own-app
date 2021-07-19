import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, increaseAmount, decreaseAmount, removeProduct, addComment } from '../../../redux/orderRedux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Cart.module.scss';

const Cart = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();
  const [activeComments, setActiveComments] = useState([]);

  const toggleCommentActivity = (id) => {
    if (activeComments.includes(id)) {
      setActiveComments(activeComments.filter(item => item !== id));
    }
    else {
      setActiveComments([...activeComments, id]);
    }
  };

  const handleCommentChange = (event) => {
    const {value: comment, id} = event.target;
    dispatch(addComment({ id, comment }));
  };

  const emptyCart = <Alert severity="info" variant="outlined">Your cart is empty now.</Alert>;

  return (
    <Paper className={styles.root}>
      <Typography paragraph variant="h5" component="h2" align="center">Cart</Typography>
      {!products || products.length === 0 ? emptyCart : <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Products</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Cost</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            {products.map(({ id, name, price, amount, comment }) => (
              <TableBody key={id}>
                <TableRow>
                  <TableCell align="left">
                    <Typography component={RouterLink} to={`/products/${id}`} className={styles.name} color="primary">
                      {name}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => dispatch(decreaseAmount(id))} size="small" color="primary">
                      <RemoveIcon />
                    </IconButton>
                    {amount}
                    <IconButton onClick={() => dispatch(increaseAmount(id))} size="small" color="secondary">
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    ${price * amount}
                  </TableCell>
                  <TableCell align="center">
                    {!comment &&
                      <IconButton onClick={() => toggleCommentActivity(id)} size="small" color="primary">
                        {activeComments.includes(id) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>}
                    <IconButton onClick={() => dispatch(removeProduct(id))} size="small" color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="justify" className={styles.comment} colSpan={4}>
                    <Collapse in={!!comment || activeComments.includes(id)} timeout="auto">
                      <TextField size="small" className={styles.commentField} id={id} name={`${id}-comment`} placeholder="Add comment ..." 
                        autoComplete="off" inputProps={{ maxLength: 500 }} value={comment} onChange={handleCommentChange} maxRows="3" fullWidth multiline
                      />
                    </Collapse>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
              <TableRow className={styles.border}>
                <TableCell align="center" colSpan={4}>
                  <Button component={RouterLink} to="/order" variant="contained" color="primary" className={styles.orderButton}>Order form</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>}
    </Paper>
  );
};

export default Cart;
