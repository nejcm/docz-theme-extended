import PropTypes from 'prop-types';
import React from 'react';
import {TagContainer} from './styles';

const Tag = (props) => <TagContainer {...props} />;

Tag.propTypes = {
  /**
   * Tag size
   */
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
  /**
   * Tag type
   */
  type: PropTypes.oneOf(['default', 'info', 'warning', 'success', 'danger']),
  /**
   * Circle shape
   */
  circle: PropTypes.bool,
  /**
   * Border radius. This prop is overriden by circle.
   */
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Tag.displayName = 'Tag';
Tag.defaultProps = {
  size: 'default',
  type: 'default',
  circle: false,
  radius: '2rem',
};

export {Tag};
