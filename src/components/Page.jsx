import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Row from './Row';

const Page = () => (
  <Container maxWidth="lg">
    <Grid container spacing={6} direction="column">
      <Row />
      <Row />
    </Grid>
  </Container>
);

export default Page;
