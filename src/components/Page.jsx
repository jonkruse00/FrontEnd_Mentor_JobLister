import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Row from './Row';
import JOB_LIST from '../const/joblist';

const Page = () => (
  <Container maxWidth="lg">
    <Grid container spacing={4} direction="column">
      {
        JOB_LIST.map((job) => <Row post={job} key={job.id} />)
      }
    </Grid>
  </Container>
);

export default Page;
