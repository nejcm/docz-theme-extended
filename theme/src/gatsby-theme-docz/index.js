/* eslint-disable react/jsx-pascal-case */
import { ComponentsProvider, theme, useConfig } from 'docz';
import baseComponents from 'gatsby-theme-docz/src/components';
import defaultConfig from 'gatsby-theme-docz/src/theme';
import { merge } from 'lodash/fp';
import React from 'react';
import { Styled, ThemeProvider } from 'theme-ui';
import GlobalStyles from './GlobalStyles';

const componentsMap = {
  ...baseComponents,
};

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={componentsMap}>
        <Styled.root>
          <GlobalStyles>{children}</GlobalStyles>
        </Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

const themeConfig = merge(defaultConfig, {
  colors: {
    modes: {
      light: {
        grayLighter: '#d0d0d0',
        gray2: '#aaa',
      },
      dark: {
        grayLighter: '#bbb',
        gray2: '#aaa',
      },
    },
  },
  boxShadow: '0 3px 7px 0 rgba(105, 111, 132, 0.1)',
  styles: {
    root: {
      fontFamily: `'Source Sans Pro', 'Roboto', sans-serif`,
      fontSize: '18px',
      color: 'text',
      bg: 'background',
    },
    h1: {
      fontFamily: 'inherit',
    },
    h2: {
      fontFamily: 'inherit',
    },
    h3: {
      fontFamily: 'inherit',
    },
    code: {
      fontFamily: 'Consolas, monaco, monospace',
    },
    inlineCode: {
      position: 'relative',
      display: 'inline-block',
      fontFamily: 'Consolas, monaco, monospace',
      backgroundColor: defaultConfig.colors.blockquote.bg,
      color: defaultConfig.colors.grayDark,
      fontSize: '0.9em',
      letterSpacing: '-0.3px',
      padding: '4px 8px',
      borderRadius: '3px',
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'collapse',
      borderSpacing: 0,
      [['th', 'td']]: {
        textAlign: 'left',
        py: '12px',
        pr: '12px',
        pl: '12px',
        borderColor: 'border',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'middle',
      borderBottomWidth: '1px',
    },
    td: {
      verticalAlign: 'middle',
      borderBottomWidth: '1px',
    },
  },
});

export default theme(themeConfig)(Theme);
