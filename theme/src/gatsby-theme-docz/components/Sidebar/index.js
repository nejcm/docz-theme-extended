/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useCurrentDoc } from 'docz';
import { NavGroup } from 'gatsby-theme-docz/src/components/NavGroup';
import { NavLink } from 'gatsby-theme-docz/src/components/NavLink';
import { NavSearch } from 'gatsby-theme-docz/src/components/NavSearch';
import * as styles from 'gatsby-theme-docz/src/components/Sidebar/styles';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Box, jsx } from 'theme-ui';
import { NO_GROUP } from '../../../hooks/useGroups';

const Label = styled.div`
  font-size: .8rem;
  color: ${({ theme }) => theme.colors.gray2};
  font-weight: bold;
  margin-bottom: .3rem;
  text-transform: uppercase;
  letter-spacing: .75px;
`;

const Group = styled.div`
  margin-bottom: 1.25rem;
`;

const SearchContainer = styled.div`
  input {
    padding: 8px 0;
  }
`;

export const Sidebar = React.forwardRef(({ menus, query, handleChange, onClick, open }, ref) => {
  const currentDocRef = useRef();
  const currentDoc = useCurrentDoc();

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
          <SearchContainer>
            <NavSearch
              placeholder="Type to search..."
              value={query}
              onChange={handleChange}
            />
          </SearchContainer>
          {menus &&
            Object.keys(menus).map((key) => <Group key={key}>
              {key !== NO_GROUP ? <Label>{key}</Label> : null}
              {(menus[key] || []).map((menu) => {
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
            </Group>)}
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
  menus: PropTypes.object,
};
