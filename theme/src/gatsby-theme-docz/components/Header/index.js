/** @jsx jsx */
import styled from '@emotion/styled';
import {useConfig, useCurrentDoc} from 'docz';
import * as styles from 'gatsby-theme-docz/src/components/Header/styles';
import {Edit, Github, Menu, Sun} from 'gatsby-theme-docz/src/components/Icons';
import {Logo} from 'gatsby-theme-docz/src/components/Logo';
import PropTypes from 'prop-types';
//import Headroom from 'react-headroom';
import {Box, Flex, jsx, useColorMode} from 'theme-ui';
import {Container, InnerContainer} from './custom-styles';

const FixedHeader = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  + div {
    position: relative;
    margin-top: 80px;

    .sidebar,
    .nav-headings {
      top: 80px;
    }
  }
`;

export const Header = ({onOpen}) => {
  const {
    repository,
    themeConfig: {
      showDarkModeSwitch,
      showMarkdownEditButton,
      header: {fixed} = {},
    },
  } = useConfig();
  const {edit = true, ...doc} = useCurrentDoc();
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
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
            <button
              sx={styles.headerButton}
              onClick={toggleColorMode}
              aria-label={`Switch to ${colorMode} mode`}
            >
              <Sun size={15} />
            </button>
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
