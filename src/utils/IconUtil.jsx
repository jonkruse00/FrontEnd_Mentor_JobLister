import React from 'react';

import remove from '../../assets/icon-remove.svg';

const IconUtil = (icon) => {
  let logo = '';
  switch (icon.split('.')[0]) {
    case 'remove':
      logo = remove;
      break;
    default:
      return null;
  }

  return (
    <svg>
      <use xlinkHref={logo} />
    </svg>
  );
};

export default IconUtil;
