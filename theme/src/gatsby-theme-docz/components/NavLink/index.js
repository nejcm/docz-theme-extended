/** @jsx jsx */
import styled from '@emotion/styled';
import {useConfig, useCurrentDoc, useDocs} from 'docz';
import {Link} from 'gatsby';
import * as styles from 'gatsby-theme-docz/src/components/NavLink/styles';
import {get} from 'lodash/fp';
import React from 'react';
import {jsx} from 'theme-ui';

const Container = styled.div`
  a {
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.75;
    }
  }
`;

const getHeadings = (route, docs) => {
  const doc = docs.find((item) => item.route === route);
  const headings = get('headings', doc);
  return headings ? headings.filter((heading) => heading.depth === 2) : [];
};

const getCurrentHash = () => {
  if (typeof window === 'undefined') {
    return '';
  }
  return window.location ? decodeURI(window.location.hash) : '';
};

export const NavLink = React.forwardRef(({item, ...props}, ref) => {
  const {themeConfig} = useConfig();
  const docs = useDocs();
  const current = useCurrentDoc();

  if (item.hidden) {
    return null;
  }

  const to = item.route;
  const headings = docs && getHeadings(to, docs);
  const isCurrent = item.route === current.route;
  const showHeadings =
    !get('menu.headings.rightSide', themeConfig, false) &&
    isCurrent &&
    headings &&
    headings.length > 0;
  const currentHash = getCurrentHash();

  return (
    <Container>
      <Link
        {...props}
        to={to}
        sx={{...styles.link, my: 0, padding: '.4rem 1.5rem'}}
        activeClassName="active"
        ref={ref}
      />
      {showHeadings &&
        headings.map((heading) => (
          <Link
            key={heading.slug}
            to={`${to}#${heading.slug}`}
            sx={{...styles.smallLink, my: 0, padding: '.4rem 1.5rem'}}
            className={currentHash === `#${heading.slug}` ? 'active' : ''}
          >
            {heading.value}
          </Link>
        ))}
    </Container>
  );
});
