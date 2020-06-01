import styled from '@emotion/styled';
import {breakpoints} from 'gatsby-theme-docz/src/theme/breakpoints';

export const Content = styled.div`
  width: 100%;

  @media screen and (max-width: ${breakpoints.mobile}px) {
    table {
      display: block;
      overflow: auto;
    }
  }
`;
