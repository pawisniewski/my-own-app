import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';

import Navbar from '../../features/Navbar/Navbar';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <AppBar position="fixed">
        <Toolbar className={styles.toolbar}>
          <Link component={RouterLink} to="/" variant="h5" className={styles.title} color="inherit" underline="none">
            My Own App
          </Link>
          <Navbar />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Header;
