/** @jsx jsx */
import styled from '@emotion/styled';
import { useConfig, useCurrentDoc } from 'docz';
import { ChevronDown } from 'gatsby-theme-docz/src/components/Icons';
import * as styles from 'gatsby-theme-docz/src/components/NavGroup/styles';
import { NavLink } from 'gatsby-theme-docz/src/components/NavLink';
import { get } from 'lodash/fp';
import PropTypes from 'prop-types';
import React from 'react';
import { jsx } from 'theme-ui';

const Container = styled.div`
  .nav-button {
    width: 100%;
    border: none;
    background-color: transparent;
    margin: 0;
    padding: 0.4rem 0;

    &:focus {
      outline: none;
    }

    svg {
      width: 1.1rem;
    }
  }
`;

export const NavGroup = ({ item, sidebarRef }) => {
  const { menuDisplayName = {} } = useConfig();
  const currentDoc = useCurrentDoc();
  const currentDocRef = React.useRef();
  const { name, menu } = item;
  const [subheadingsVisible, setShowsubheadings] = React.useState(
    currentDoc.menu === name,
  );
  const toggleSubheadings = () => setShowsubheadings(!subheadingsVisible);
  React.useEffect(() => {
    if (sidebarRef.current && currentDocRef.current) {
      sidebarRef.current.scrollTo(0, currentDocRef.current.offsetTop);
    }
  }, [sidebarRef]);

  return (
    <Container sx={{ ...styles.wrapper, my: 0 }} data-testid="nav-group">
      <button
        className="nav-button"
        sx={styles.title}
        onClick={toggleSubheadings}
      >
        {get(item.name, menuDisplayName) || item.name}
        <ChevronDown sx={styles.chevron({ active: subheadingsVisible })} />
      </button>
      <div sx={styles.sublinkWrapper} data-testid="nav-group-links">
        {menu &&
          subheadingsVisible &&
          menu.map((submenu) => {
            if (currentDoc.route === submenu.route) {
              return (
                <NavLink key={submenu.id} item={submenu} ref={currentDocRef}>
                  {get(submenu.name, menuDisplayName) || submenu.name}
                </NavLink>
              );
            }
            return (
              <NavLink key={submenu.id} item={submenu}>
                {get(submenu.name, menuDisplayName) || submenu.name}
              </NavLink>
            );
          })}
      </div>
    </Container>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
  sidebarRef: PropTypes.object,
};
