/** @jsx jsx */
import {useConfig, useCurrentDoc} from 'docz';
import * as styles from 'gatsby-theme-docz/src/components/Header/styles';
import {
  Edit,
  Github,
  Menu,
  Search,
  Sun,
} from 'gatsby-theme-docz/src/components/Icons';
import {Logo} from 'gatsby-theme-docz/src/components/Logo';
import PropTypes from 'prop-types';
import {useState} from 'react';
//import Headroom from 'react-headroom';
import {Box, Flex, jsx, useColorMode} from 'theme-ui';
import SearchDrawer from '../Search';
import {Container, FixedHeader, InnerContainer} from './custom-styles';

export const Header = ({onOpen}) => {
  const {
    repository,
    themeConfig: {
      showDarkModeSwitch,
      showMarkdownEditButton,
      search,
      header: {fixed, icons} = {},
    },
  } = useConfig();
  const {edit = true, ...doc} = useCurrentDoc();
  const [colorMode, setColorMode] = useColorMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  const toggleSearch = (val) => {
    setDrawerOpen((prev) => (val !== undefined ? !!val : !prev));
  };

  const ui = (
    <Container sx={styles.wrapper} data-testid="header">
      <Box className="menu-icon" sx={styles.menuIcon}>
        <button sx={styles.menuButton} onClick={onOpen}>
          <Menu size={25} />
        </button>
      </Box>
      <InnerContainer sx={styles.innerContainer}>
        <Logo />
        <Flex>
          {repository && (
            <Box sx={{mr: 2}}>
              <a
                className={`${icons} icon`}
                href={repository}
                sx={styles.headerButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
              </a>
            </Box>
          )}
          {showDarkModeSwitch && (
            <Box sx={{mr: 2}}>
              <button
                className={`${icons} icon`}
                sx={styles.headerButton}
                onClick={toggleColorMode}
                aria-label={`Switch to ${colorMode} mode`}
              >
                <Sun size={15} />
              </button>
            </Box>
          )}
          {search && (
            <Box>
              <button
                className={`${icons} icon`}
                sx={styles.headerButton}
                onClick={toggleSearch}
                aria-label={`Search`}
              >
                <Search size={15} />
              </button>
              <SearchDrawer open={drawerOpen} toggleOpen={toggleSearch} />
            </Box>
          )}
        </Flex>
        {showMarkdownEditButton && edit && doc.link && (
          <a
            className="h-o"
            sx={styles.editButton}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Edit width={14} />
            <Box sx={{pl: 2}}>Edit page</Box>
          </a>
        )}
      </InnerContainer>
    </Container>
  );

  return fixed ? <FixedHeader>{ui}</FixedHeader> : ui;
};

Header.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
