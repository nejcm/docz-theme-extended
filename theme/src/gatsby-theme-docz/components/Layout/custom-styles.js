import styled from '@emotion/styled';
import {breakpoints} from 'gatsby-theme-docz/src/theme/breakpoints';

export const Content = styled.div`
  width: 100%;
  margin-right: 2rem;
`;

export const HeadingsSidebar = styled.div`
  width: 250px;

  @media screen and (max-width: ${breakpoints.desktop}px) {
    width: 100%;
    order: -1;
    margin-bottom: 2rem;
  }
`;
