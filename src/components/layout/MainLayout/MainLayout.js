import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Container from '@material-ui/core/Container';

import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => (
  <div className={styles.root}>
    <Header />
    <Container maxWidth="md" className={styles.container}>
      { children }
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
