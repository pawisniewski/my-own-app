import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrent, fetchOne } from '../../../redux/productsRedux';
import { addProduct } from '../../../redux/orderRedux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';

import Gallery from '../../features/Gallery/Gallery';

import styles from './Product.module.scss';

const Product = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const product = useSelector(state => getCurrent(state, id));
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    dispatch(fetchOne(id));
  }, [dispatch, id]);

  if(!product) return <Alert severity="info">Sorry, there is no product {id}</Alert>;
  const { name, description, price, images } = product;
  const handleAdd = () => {
    dispatch(addProduct({ id, name, price, amount }));
  };

  return (
    <Paper className={styles.root}> 
      <Grid>
        <Typography variant="h5" component="h2" align="center">
          {name}
        </Typography>
      </Grid>
      <Grid>
        <Gallery images={images}></Gallery>
      </Grid>
      <Grid>
        <Typography paragraph align="justify">
          {description}
        </Typography>
      </Grid>
      <Grid align="right">
        <Typography align="left">
          <strong>from ${price}</strong>
        </Typography>
        <TextField variant="standard" color="primary" type="number" size="small" 
          value={amount} onChange={({target}) => setAmount(parseInt(target.value))} 
          inputProps={{ min: 1, max: 10 }} className={styles.input}
        />
        <Button onClick={handleAdd} size="small" variant="contained" color="primary">Add to cart</Button>
      </Grid>
    </Paper>
  );
};

export default Product;
