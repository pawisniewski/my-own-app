import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll, fetchAll } from '../../../redux/productsRedux';

import Paper from '@material-ui/core/Paper';

import ProductList from '../../features/ProductList/ProductList';

import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAll);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  
  return (
    <Paper className={styles.root}>
      <ProductList products={products} />
    </Paper>
  );
};

export default Home;
