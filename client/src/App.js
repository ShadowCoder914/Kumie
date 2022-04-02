import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import mylogo from './images/Zionaèamainlogo.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  //starts the State off at 0

  //use Dispatch is something we import from react-redux and
  //that we run immediately
  const dispatch = useDispatch();
  //classes = useStyles() is a function that uses MaterialUI
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar style={{padding: "5px" }} className={classes.appBar} position="static" color="inherit">
        
        <Typography className={classes.heading} variant="h2" align="center">
        </Typography>
        <img style={{marginRight: "100px" }} className={classes.image} src={mylogo} alt="icon" height="40"  />
            Home | About | Social | Contact | Art 

      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={8} sm={4} >
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;


//App will be a hybrid of a Pinterest and Instagram / DeviantArt idea
//Complete with a chat app and some more features 