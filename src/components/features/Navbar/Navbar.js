import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar =({ className }) => (
  <nav className={clsx(className, styles.root)}>
    <IconButton component={NavLink} to='/cart' color='inherit'>
      <ShoppingCartIcon />
    </IconButton>
  </nav>
);
  
Navbar.propTypes = {
  className: PropTypes.string,
};
  
export default Navbar;
