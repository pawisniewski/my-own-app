import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder, getRequest, sendOrder, storeInput } from '../../../redux/orderRedux';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { Link as RouterLink } from 'react-router-dom';

import styles from './OrderForm.module.scss';

const OrderForm = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrder);
  const request = useSelector(getRequest);

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  const [warning, setWarning] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    
    if(sending && request.type === 'POST' && !request.active && !request.error) {
      setSuccess(true);
      setSending(false);
    }
    if(sending && request.type === 'POST' && request.error) {
      setError(true);
      setSending(false);
    }
  }, [request]);

  const validators = {
    firstName: {
      validator: value => value && 2 <= value.length && value.length <= 20,
      message: 'Invalid length.',
    },
    lastName: {
      validator: value => value && 3 <= value.length && value.length <= 30,
      message: 'Invalid length.',
    },
    email: {
      validator: value => value && value.match(new RegExp(/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z]{1,6}))$/i)),
      message: 'Invalid format.',
    },
    address: {
      validator: value => value && 5 <= value.length && value.length <= 50,
      message: 'Invalid length.',
    },
  };

  const validate = (name, value) => {
    const { validator, message } = validators[name];
    if(!validator(value)){
      setErrors({ ...errors, [name]: message });
    } 
    else setErrors({ ...errors, [name]: '' });
  };

  const handleChange = ({ target: { name, value } }) => {
    validate(name, value);
    dispatch(storeInput({ [name]: value }));
  };

  const validateOrder = () => {
    let completed = true;
    let hasErrors = false;

    for (let key in order) {
      if (!order[key]) completed = false;
    }
    if (completed) {
      for (let error in errors) {
        if (errors[error]) hasErrors = true;
      }
    }
    return completed && !hasErrors && order.products.length > 0;
  };

  const submitOrder = () => {
    
    if(validateOrder()) {
      setWarning(false);
      setSending(true);
      const orderProducts = order.products.map(({ id, amount, comment }) => comment ? ({ product: id, amount, comment }) : ({ product: id, amount }));
      dispatch(sendOrder({ ...order, status: 'ordered', products: orderProducts }));
    } 
    else setWarning(true);
  };

  return (
    <Grid className={styles.root}>
      <Typography paragraph variant="h5" component="h2" align="center">Order form</Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} item container direction="column" className={styles.col}>
            <TextField id="firstName" label="First name" name="firstName" variant="outlined" fullWidth margin="normal"
              value={order.firstName} onChange={handleChange} error={!!errors.firstName} helperText={errors.firstName} required
            />
            <TextField id="lastName" label="Last name" name="lastName" variant="outlined" fullWidth margin="normal" 
              value={order.lastName} onChange={handleChange} error={!!errors.lastName} helperText={errors.lastName} required
            />
          </Grid>
          <Grid xs={12} sm={6} item container direction="column" className={styles.col}>
            <TextField id="email" label="E-mail address" name="email" variant="outlined" fullWidth margin="normal"
              value={order.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} required
            />
            <TextField id="address" label="Delivery address" name="address" variant="outlined" fullWidth margin="normal" multiline
              value={order.address} onChange={handleChange} error={!!errors.address} helperText={errors.address} required 
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between">
          <Button component={RouterLink} to="/cart" variant="contained" color="primary" className={styles.orderButton}>Back to cart</Button>
          <Button onClick={submitOrder} variant="contained" color="secondary" className={styles.orderButton}>Send order</Button>
        </Grid>
      </form>
      <Snackbar open={warning} autoHideDuration={6000} onClose={() => setWarning(false)}>
        <Alert severity="warning">Check form fields.</Alert>
      </Snackbar>
      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert severity="success">Your order has been sent.</Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert severity="error">Connection error!</Alert>
      </Snackbar>
    </Grid>
  );
};

export default OrderForm;
