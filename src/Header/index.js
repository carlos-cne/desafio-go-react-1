import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = ({ title }) => (
  <div className="mainHeader">
    <p>{title}</p>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
