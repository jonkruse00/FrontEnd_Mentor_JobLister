import React from 'react';
import account from '../../assets/account.svg';
import eyeCamCo from '../../assets/eye-cam-co.svg';
import faceIt from '../../assets/face-it.svg';
import insure from '../../assets/insure.svg';
import loopStudios from '../../assets/loop-studios.svg';
import manage from '../../assets/manage.svg';
import myHome from '../../assets/my-home.svg';
import photoSnap from '../../assets/photo-snap.svg';
import shortly from '../../assets/shortly.svg';
import theAirFilterCompany from '../../assets/the-air-filter-company.svg';

const Icons = (logoName) => {
  let logo = '';
  switch (logoName.split('.')[0]) {
    case 'account':
      logo = account;
      break;
    case 'eyecam-co':
      logo = eyeCamCo;
      break;
    case 'faceit':
      logo = faceIt;
      break;
    case 'insure':
      logo = insure;
      break;
    case 'loop-studios':
      logo = loopStudios;
      break;
    case 'manage':
      logo = manage;
      break;
    case 'myhome':
      logo = myHome;
      break;
    case 'photo-snap':
      logo = photoSnap;
      break;
    case 'shortly':
      logo = shortly;
      break;
    case 'the-air-filter-company':
      logo = theAirFilterCompany;
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

export default Icons;
