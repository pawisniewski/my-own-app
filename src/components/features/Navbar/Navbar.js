import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAmount } from '../../../redux/orderRedux';

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar =({ className }) => { 
  const amount = useSelector(getAmount);

  return(
    <nav className={clsx(className, styles.root)}>
      <IconButton component={NavLink} to='/cart' color='inherit'>
        <Badge badgeContent={amount} color='secondary'>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </nav>
  );
};
  
Navbar.propTypes = {
  className: PropTypes.string,
};
  
export default Navbar;
