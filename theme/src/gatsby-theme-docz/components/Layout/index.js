/** @jsx jsx */
import { Global } from '@emotion/core';
import { useConfig, useMenus } from 'docz';
import { Header } from 'gatsby-theme-docz/src/components/Header';
import * as styles from 'gatsby-theme-docz/src/components/Layout/styles';
import { MainContainer } from 'gatsby-theme-docz/src/components/MainContainer';
import { Sidebar } from 'gatsby-theme-docz/src/components/Sidebar';
import { breakpoints } from 'gatsby-theme-docz/src/theme/breakpoints';
import global from 'gatsby-theme-docz/src/theme/global';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { Flex, jsx, Layout as BaseLayout, Main } from 'theme-ui';
import useGroups from '../../../hooks/useGroups';
import Footer from '../Footer';
import NavHeadings from '../NavHeadings';
import { Content } from './custom-styles';

const globalStyles = {
  ...global,
  '*': {
    boxSizing: "border-box",
  },
  '.h-o:hover': {
    transition: 'opacity .2s ease',
    opacity: '.8'
  },
  'button, select, input, textarea': {
    fontFamily: 'inherit'
  }
}

export const Layout = ({ children, /*pageContext = {},*/ doc = {}, ...rest }) => {
  const {
    themeConfig: { mainContainer: { fullscreen, align = "center" } = {} },
  } = useConfig();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const menus = useMenus({ query });
  let groupedMenus = useGroups(menus);
  if (query && query.length > 0) {
    groupedMenus = { "": menus };
  }

  const handleChange = (ev) => {
    setQuery(ev.target.value);
  };

  const { updated } = doc.value || {};
  const mainStyles = {
    marginLeft: align !== 'left' ? 'auto' : 0,
    marginRight: align !== 'right' ? 'auto' : 0,
    ...(fullscreen ? { maxWidth: 'none' } : undefined)
  };

  return (
    <BaseLayout sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
      <Global styles={globalStyles} />
      <Main sx={styles.main}>
        <Header onOpen={() => setOpen((s) => !s)} />
        <div sx={styles.wrapper}>
          <Sidebar
            ref={ref}
            open={open}
            menus={groupedMenus}
            handleChange={handleChange}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <MainContainer style={mainStyles} data-testid="main-container" doc={doc} {...rest}>
            <Flex
              sx={{
                width: '100%',
                justifyContent: 'stretch',
                [`@media screen and (max-width: ${breakpoints.desktop}px)`]: {
                  flexDirection: 'column',
                },
              }}
            >
              <Content>
                <div>{children}</div>
                <Footer updated={updated} menus={groupedMenus} />
              </Content>
              <NavHeadings />
            </Flex>
          </MainContainer>
        </div>
      </Main>
    </BaseLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
  doc: PropTypes.object,
};
