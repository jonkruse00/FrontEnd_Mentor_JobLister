import React from 'react';
import PropTypes from 'prop-types';

import IconUtil from '../utils/IconUtil';

import './CustomChip.less';

/**
 * Changed to a Custom Chip instead because
 * Chip from Material UI harder to modify into they style necessary.
 */
const CustomChip = ({ customClass, label, removable }) => (
  <div className={`chip ${customClass}`}>
    <span className="chip-label">
      {label}
    </span>
    {removable && <span className="remove-icon">{IconUtil('remove')}</span>}
  </div>
);

CustomChip.propTypes = {
  label: PropTypes.string,
  customClass: PropTypes.string,
  removable: PropTypes.bool,
};

CustomChip.defaultProps = {
  customClass: '',
  label: '',
  removable: false,
};

export default CustomChip;
