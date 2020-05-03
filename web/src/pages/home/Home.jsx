import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#2e3131',
    width: '20%',
    padding: '1rem',
    '& .MuiButton-label': {
      color: 'white',
    },
    '& .MuiButton-text': {
      border: '1px solid white',
      margin: '0.1rem',
      width: '80%',
    },
    '& .MuiInputBase-input': { color: 'white', minHeight: '10vh' },
  },
  whiteText: { color: 'white' },
}));

const Home = () => {
  const classes = useStyles();
  const [firstE, setFirstE] = useState('');
  const [operator, setOperator] = useState('');
  const [secondE, setSecondE] = useState('');

  const processResult = () => {
    if (!operator || !firstE || !secondE) return;

    try {
      const firstValue = parseFloat(firstE);
      const secondValue = parseFloat(secondE);

      switch (operator) {
        case '+':
          setFirstE(firstValue + secondValue);
          break;
        case '-':
          setFirstE(firstValue - secondValue);
          break;
        case '*':
          setFirstE(firstValue * secondValue);
          break;
        case '/':
          setFirstE(firstValue / secondValue);
          break;
        default:
          return;
      }

      setSecondE('');
      setOperator('');
    } catch (e) {
      console.log(e);
    }
  };

  const addOperator = (value) => () => {
    try {
      const pValue = parseInt(value, 10);
      if (!pValue && !firstE) return;

      if (!pValue && firstE && value !== '.') {
        if (operator) {
          processResult();
          setOperator(value);
        }

        setOperator(value);
        return;
      }

      if (!operator) {
        setFirstE(`${firstE}${value}`);
        return;
      }

      setSecondE(`${secondE}${value}`);
    } catch (e) {
      console.log(e);
    }
  };

  const clear = () => {
    setOperator('');
    setFirstE('');
    setSecondE('');
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            disabled
            fullWidth
            value={`${firstE} ${operator} ${secondE}`}
            className={classes.whiteText}
          />
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator(7)}>7</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator(8)}>8</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator(9)}>9</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator('/')}>/</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator(4)}>4</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator(5)}>5</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator(6)}>6</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator('*')}>*</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator(1)}>1</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator(2)}>2</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator(3)}>3</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator('-')}>-</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator(0)}>0</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator('.')}>.</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={processResult}>=</Button>
        </Grid>
        <Grid items xs={3}>
          <Button onClick={addOperator('+')}>+</Button>
        </Grid>
      </Grid>
      <Button onClick={clear}>Clear</Button>
    </Container>
  );
};

export default Home;
