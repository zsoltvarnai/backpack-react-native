import React, { PropTypes } from 'react';

import SideNavLayout from './../SideNavLayout';
import * as routes from './../../constants/routes';

const links = [
  {
    category: 'Using Backpack',
    links: [
      { route: routes.GETTING_STARTED, children: 'Getting started' },
      { route: routes.BACKPACK_REACT_SCRIPTS, children: 'Backpack React Scripts' },
      { route: routes.BASE_STYLESHEET, children: 'Base stylesheet' },
      { route: routes.CONTRIBUTING, children: 'Contributing' },
      { route: routes.I18N, children: 'Internationalisation' },
    ],
  },
];

const UsingLayout = ({ children }) => <SideNavLayout links={links}>{children}</SideNavLayout>;

UsingLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UsingLayout;
