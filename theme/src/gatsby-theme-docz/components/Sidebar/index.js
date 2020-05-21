/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { Global } from '@emotion/core';
import { useCurrentDoc, useMenus } from 'docz';
import { NavGroup } from 'gatsby-theme-docz/src/components/NavGroup';
import { NavLink } from 'gatsby-theme-docz/src/components/NavLink';
import { NavSearch } from 'gatsby-theme-docz/src/components/NavSearch';
import * as styles from 'gatsby-theme-docz/src/components/Sidebar/styles';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Box, jsx } from 'theme-ui';

export const Sidebar = React.forwardRef(
  ({ onClick, open }, ref) => {
    const [query, setQuery] = useState('');
    const menus = useMenus({ query });
    const currentDocRef = useRef();
    const currentDoc = useCurrentDoc();

    const handleChange = (ev) => {
      setQuery(ev.target.value);
    };

    useEffect(() => {
      if (ref.current && currentDocRef.current) {
        ref.current.scrollTo(0, currentDocRef.current.offsetTop);
      }
    }, [ref]);

    return (
      <>
        <Box onClick={onClick} sx={styles.overlay({ open })}>
          {open && <Global styles={styles.global} />}
        </Box>
        <Box className="sidebar" ref={ref} sx={styles.wrapper({ open })} data-testid="sidebar">
          <div>
            <NavSearch
              placeholder="Type to search..."
              value={query}
              onChange={handleChange}
              style={{ padding: '8px 0' }}
            />
            {menus &&
              menus.map((menu) => {
                if (!menu.route)
                  return (
                    <div key={menu.id} className="nav-group">
                      <NavGroup item={menu} sidebarRef={ref} />
                    </div>
                  );
                if (menu.route === currentDoc.route) {
                  return (
                    <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                      {menu.name}
                    </NavLink>
                  );
                }
                return (
                  <NavLink key={menu.id} item={menu}>
                    {menu.name}
                  </NavLink>
                );
              })}
          </div>
        </Box>
      </>
    );
  },
);

Sidebar.propTypes = {
  onClick: PropTypes.func,
  handleChange: PropTypes.func,
  open: PropTypes.bool,
  query: PropTypes.string,
  menus: PropTypes.arrayOf(PropTypes.object),
  currentDoc: PropTypes.object,
};
