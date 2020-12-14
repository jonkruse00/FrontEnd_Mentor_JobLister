import React from 'react';
import {
  Button, Container, Grid, Paper,
} from '@material-ui/core';
import JOB_LIST from '../const/joblist';

import Row from './Row';
import CustomChip from './CustomChip';

import './Page.less';

const Page = () => (
  <Container maxWidth="lg">
    <Grid container spacing={4} direction="column">
      <Grid item xs={12}>
        <Paper className="filter-row">
          <Grid container item xs={12}>
            <Grid item xs={11}>
              <CustomChip label="frontend" removable />
              <CustomChip label="Senior" removable />
            </Grid>
            <Grid item xs={12} sm={1}>
              <div className="button-wrapper">
                <Button className="link-button">
                  clear
                </Button>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {
        JOB_LIST.map((job) => <Row post={job} key={job.id} />)
      }
    </Grid>
  </Container>
);

export default Page;
