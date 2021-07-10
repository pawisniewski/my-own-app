import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

import styles from './Gallery.module.scss';

const Gallery = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const changeImage = (i) => {
    setCurrent(i); 
  };

  const thumbs = images.map(({ src, name }, i) => (
    <Grid key={i} item xs>
      <ButtonBase onClick={() => changeImage(i)}>
        <img src={src} alt={name} className={styles.thumbs} />
      </ButtonBase>
    </Grid>)
  );

  return (
    <Grid container direction='column' className={styles.root}>
      <Grid item xs className={styles.mainImage}>
        <img src={images[current].src} alt={images[current].name} />
      </Grid>
      {images.length > 0 && <Grid item container spacing={2}>
        {thumbs}
      </Grid>}
    </Grid>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
