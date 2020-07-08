import {Link} from 'docz';
import PropTypes from 'prop-types';
import React from 'react';
import {isUrl} from '../../helpers';
import {Wrapper} from './styles';

const Ref = ({to, name, ...rest}) => {
  const ui = (
    <Wrapper>
      <span>{name}</span>
      <span>{to}</span>
    </Wrapper>
  );
  if (isUrl(to)) {
    return (
      <a href={to} {...rest}>
        {ui}
      </a>
    );
  }
  return (
    <Link to={to} {...rest}>
      {ui}
    </Link>
  );
};

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
