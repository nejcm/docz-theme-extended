import PropTypes from 'prop-types';
import React from 'react';
import { Inner, Outer } from './styles';

const Hint = ({ icon = true, variant, ...rest }) => variant !== 'outer' ? (
  <Inner icon={icon} {...rest} />
) : (
    <Outer icon={icon} {...rest} />
  );

Hint.propTypes = {
  /**
   * Display icon
   */
  icon: PropTypes.bool,
  /**
   * Hint type
   */
  type: PropTypes.oneOf(['default', 'info', 'warning', 'success', 'danger']),
  /**
   * Hint variant
   */
  variant: PropTypes.oneOf(['inner', 'outer']),
};

Hint.displayName = "Hint";
Hint.defaultProps = {
  icon: true,
};

export { Hint };

