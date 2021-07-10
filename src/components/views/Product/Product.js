import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrent, fetchOne } from '../../../redux/productsRedux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import Gallery from '../../features/Gallery/Gallery';

import styles from './Product.module.scss';

const Product = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const product = useSelector(state => getCurrent(state, id));

  useEffect(() => {
    dispatch(fetchOne(id));
  }, [dispatch, id]);

  if(!product) return <Alert severity="info">Sorry, there is no product {id}</Alert>;
  const { name, description, price, images } = product;

  return (
    <Paper className={styles.root}> 
      <Grid>
        <Typography variant="h6" component="h2" align="center">
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
      <Typography paragraph align="right">
        ${price}
      </Typography>
      <Typography align="right">
        <Button variant="contained" color="primary">Add to cart</Button>
      </Typography>
    </Paper>
  );
};

export default Product;
