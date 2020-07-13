/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {Global} from '@emotion/core';
import {useConfig, useCurrentDoc} from 'docz';
import {NavGroup} from 'gatsby-theme-docz/src/components/NavGroup';
import {NavLink} from 'gatsby-theme-docz/src/components/NavLink';
import {NavSearch} from 'gatsby-theme-docz/src/components/NavSearch';
import * as styles from 'gatsby-theme-docz/src/components/Sidebar/styles';
import {get} from 'lodash/fp';
import PropTypes from 'prop-types';
import React, {useEffect, useRef} from 'react';
import {Box, jsx} from 'theme-ui';
import {NO_GROUP} from '../../hooks/useExtendedMenus';
import {Container, Group, Label, SearchContainer} from './custom-styles';

export const Sidebar = React.forwardRef(
  ({menus, query, handleChange, onClick, open}, ref) => {
    const currentDocRef = useRef();
    const {
      menuDisplayName = {},
      themeConfig: {menu: {search} = {}} = {},
    } = useConfig();
    const currentDoc = useCurrentDoc();

    useEffect(() => {
      if (ref.current && currentDocRef.current) {
        ref.current.scrollTo(0, currentDocRef.current.offsetTop);
      }
    }, [ref]);

    return (
      <Container>
        <Box onClick={onClick} sx={styles.overlay({open})}>
          {open && <Global styles={styles.global} />}
        </Box>
        <Box
          className="sidebar"
          ref={ref}
          sx={{...styles.wrapper({open}), px: 0}}
          data-testid="sidebar"
        >
          <div>
            {search !== false ? (
              <SearchContainer>
                <NavSearch
                  placeholder="Type to search..."
                  value={query}
                  onChange={handleChange}
                />
              </SearchContainer>
            ) : null}
            {menus &&
              Object.keys(menus).map((key) => (
                <Group key={key}>
                  {key !== NO_GROUP ? <Label>{key}</Label> : null}
                  {(menus[key] || []).map((menu) => {
                    if (!menu) return null;
                    if (!menu.route) {
                      return (
                        <div key={menu.id} className="nav-group">
                          <NavGroup item={menu} sidebarRef={ref} />
                        </div>
                      );
                    }
                    if (menu.route === currentDoc.route) {
                      return (
                        <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                          {get(menu.name, menuDisplayName) || menu.name}
                        </NavLink>
                      );
                    }
                    return (
                      <NavLink key={menu.id} item={menu}>
                        {get(menu.name, menuDisplayName) || menu.name}
                      </NavLink>
                    );
                  })}
                </Group>
              ))}
          </div>
        </Box>
      </Container>
    );
  },
);

Sidebar.propTypes = {
  onClick: PropTypes.func,
  handleChange: PropTypes.func,
  open: PropTypes.bool,
  query: PropTypes.string,
  menus: PropTypes.object,
};
