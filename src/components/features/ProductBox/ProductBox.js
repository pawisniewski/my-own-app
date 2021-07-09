import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Link as RouterLink } from 'react-router-dom';

import styles from './ProductBox.module.scss';

const ProductBox = ({ product: { id, name, price, mainImage } }) => (
  <Card className={styles.root}>
    <CardActionArea component={RouterLink} to={`/products/${id}`}>
      <CardMedia component="img" image={mainImage.src} />
      <CardContent>
        <Typography variant="h6" component="h2">
          {name}
        </Typography>
        <Typography display="block" align="right">
          {price}$
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

ProductBox.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    mainImage: PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductBox;
