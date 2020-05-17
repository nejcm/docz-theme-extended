import PropTypes from 'prop-types';
import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Heading, icon, Sticky, Toc } from './custom-styles';

const NavHeadings = ({ headings, depth, scrollspy }) => {
  const ui = headings.map((heading, i) => {
    if (heading.depth > depth) {
      return null;
    }
    return (
      <li key={i}>
        <a
          href={`#${heading.slug}`}
          className={`${heading.depth > 2 ? 'inner' : ''}`}
        >
          {heading.value}
        </a>
      </li>
    );
  });

  return (
    <Sticky>
      <Toc>
        <Heading>
          {icon}
          Contents
        </Heading>
        {scrollspy ? (
          <Scrollspy
            items={headings.map((heading) => heading.slug)}
            currentClassName="current"
          >
            {ui}
          </Scrollspy>
        ) : (
            <ul>{ui}</ul>
          )}
      </Toc>
    </Sticky>
  );
};

NavHeadings.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.object),
  depth: PropTypes.number,
  scrollspy: PropTypes.bool,
};

export default NavHeadings;
