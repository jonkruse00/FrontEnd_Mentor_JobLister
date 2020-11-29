import React from 'react';
import {
  Chip, Grid, Divider, Paper,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Icons from '../Utils/Icons';

import './Row.less';

const Row = ({ post }) => {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    postedAt,
    contract,
    role,
    level,
    location,
    languages,
    tools,
  } = post;

  return (
    <Grid item xs={12} className="job">
      <Paper>
        <Grid container>
          <Grid item xs={12} sm={2}>
            {Icons(logo)}
          </Grid>
          <Grid container item xs={12} md={5} className="details">
            <Grid item xs={12}>
              <span className="company-name">{company}</span>
              <span className="select-chips">
                {isNew
                  && (<Chip size="small" label="NEW!" className="new-chip" />)}
                {
                  featured
                  && (
                    <Chip
                      size="small"
                      label="FEATURED"
                      className="featured-chip"
                    />
                  )
                }
              </span>
            </Grid>
            <Grid item xs={12}>
              <h3 className="position">{position}</h3>
            </Grid>
            <Grid item xs={12}>
              <Grid container alignItems="center">
                <Grid item xs={2}>
                  {postedAt}
                </Grid>
                <Grid item xs={1}>
                  &#8226;
                </Grid>
                <Grid item xs={2}>
                  {contract}
                </Grid>
                <Grid item xs={1}>
                  &#8226;
                </Grid>
                <Grid item xs={2}>
                  {location}
                </Grid>
                <Grid item xs={4} />
              </Grid>
            </Grid>
            <Grid item xs={12} className="separator">
              <Divider variant="middle" />
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={5}
            spacing={2}
            className="chips"
            alignItems="center"
          >
            {
              [role, level, ...languages, ...tools]
                .map((chip) => (
                  <Grid item key={chip}>
                    <Chip label={chip} />
                  </Grid>
                ))
            }
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

Row.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    company: PropTypes.string,
    logo: PropTypes.string,
    new: PropTypes.bool,
    featured: PropTypes.bool,
    position: PropTypes.string,
    role: PropTypes.string,
    level: PropTypes.string,
    postedAt: PropTypes.string,
    contract: PropTypes.string,
    location: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    tools: PropTypes.arrayOf(PropTypes.string),
  }),
};

Row.defaultProps = {
  post: {
    id: 1,
    company: 'Photosnap',
    logo: 'photo-snap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
};

export default Row;
