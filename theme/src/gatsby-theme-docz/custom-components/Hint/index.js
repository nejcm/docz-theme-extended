import PropTypes from 'prop-types';
import React from 'react';
import {AlertTriangle, CheckCircle, Info, XCircle} from 'react-feather';
import {Container} from './styles';

const icons = {
  default: Info,
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  danger: XCircle,
};

const Hint = ({icon = true, type = 'default', children, ...rest}) => {
  const Icon = icons[type];

  return (
    <Container type={type} {...rest}>
      {icon && (
        <span>
          <Icon size={27} />
        </span>
      )}
      <div>{children}</div>
    </Container>
  );
};

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
  /**
   * Hint content
   */
  children: PropTypes.node,
};

Hint.displayName = 'Hint';
Hint.defaultProps = {
  icon: true,
};

export {Hint};
