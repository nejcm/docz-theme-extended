import PropTypes from 'prop-types';
import React from 'react';
import {Link} from './styles';

const Ref = ({to, name}) => (
  <Link href={to}>
    <span>{name}</span>
    <span>{to}</span>
  </Link>
);

Ref.propTypes = {
  /**
   * Ref link
   */
  to: PropTypes.string.isRequired,
  /**
   * Ref name to display
   */
  name: PropTypes.string.isRequired,
};

Ref.displayName = 'Ref';
export {Ref};
