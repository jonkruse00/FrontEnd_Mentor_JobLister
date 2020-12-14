import React from 'react';
import {
  Chip, Grid, Divider, Paper,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import LogoIcon from '../utils/LogoIcon';

import './Row.less';
import CustomChip from './CustomChip';

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
          <Grid item xs={12} sm={1} className="logo">
            {LogoIcon(logo)}
          </Grid>

          <Grid container item xs={12} md={6} className="details">
            <Grid item xs={12}>
              <span
                className="company-name"
                aria-label={company}
              >
                {company}
              </span>
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
              <ul className="smallDetails">
                <li>{postedAt}</li>
                <li>{contract}</li>
                <li>{location}</li>
              </ul>
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
            className="chips"
            alignItems="center"
          >
            {
              [role, level, ...languages, ...tools]
                .map((chip) => (
                  <Grid item key={chip}>
                    <CustomChip customClass="skill-chip" label={chip} />
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
    id: -1,
    company: '',
    logo: '',
    new: false,
    featured: false,
    position: '',
    role: '',
    level: '',
    postedAt: '',
    contract: '',
    location: '',
    languages: [],
    tools: [],
  },
};

export default Row;
