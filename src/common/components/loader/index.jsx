import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Loader = ({size = 10}) => {
   return (
      <div className={`loader w-${ size } h-${size}` }/>
   );
};

// Loader.defaultProps = {
//    size: 10,
// };

Loader.propTypes = {
   size: PropTypes.number,
};

export default Loader;
