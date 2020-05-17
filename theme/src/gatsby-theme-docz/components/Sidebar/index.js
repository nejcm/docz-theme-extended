/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { Global } from '@emotion/core';
import { NavGroup } from 'gatsby-theme-docz/src/components/NavGroup';
import { NavLink } from 'gatsby-theme-docz/src/components/NavLink';
import { NavSearch } from 'gatsby-theme-docz/src/components/NavSearch';
import * as styles from 'gatsby-theme-docz/src/components/Sidebar/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, jsx } from 'theme-ui';

export const Sidebar = React.forwardRef(({ onClick, handleChange, open, query, menus, currentDoc }, ref) => {
  const { navRef, currentDocRef } = ref;
  return (
    <>
      <Box onClick={onClick} sx={styles.overlay({ open })}>
        {open && <Global styles={styles.global} />}
      </Box>
      <Box ref={navRef} sx={styles.wrapper({ open })} data-testid="sidebar">
        <NavSearch
          placeholder="Type to search..."
          value={query}
          onChange={handleChange}
        />
        {menus &&
          menus.map((menu) => {
            if (!menu.route)
              return <div key={menu.id} className="nav-group"><NavGroup item={menu} sidebarRef={navRef} /></div>
            if (menu.route === currentDoc.route) {
              return (
                <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                  {menu.name}
                </NavLink>
              )
            }
            return (
              <NavLink key={menu.id} item={menu}>
                {menu.name}
              </NavLink>
            )
          })}
      </Box>
    </>
  );
})

Sidebar.propTypes = {
  onClick: PropTypes.func,
  handleChange: PropTypes.func,
  open: PropTypes.bool,
  query: PropTypes.string,
  menus: PropTypes.arrayOf(PropTypes.object),
  currentDoc: PropTypes.object,
}
