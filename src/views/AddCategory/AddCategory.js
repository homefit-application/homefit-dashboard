import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import axios from '../../api';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AddCategory = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    name: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    console.log(values.categoryId);
  };

  const handleProductSubmit = async () => {
    try {
      await axios.post('/categories', { ...values });
      alert('Category Added!');
    } catch (error) {
      console.log(values);
      alert(error);
      console.log(error);
    }
  };

  return (
    <Grid container>
      <Grid item lg={12} md={6} xl={4} xs={12}>
        <Card {...rest} className={clsx(classes.root, className)}>
          <form autoComplete="off" noValidate>
            <CardHeader title="Add Category" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    margin="dense"
                    name="name"
                    onChange={handleChange}
                    required
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                color="primary"
                onClick={() => handleProductSubmit()}
                variant="contained">
                Save Category
              </Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

AddCategory.propTypes = {
  className: PropTypes.string
};

export default AddCategory;
