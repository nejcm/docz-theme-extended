import styled from '@emotion/styled';
import {breakpoints} from 'gatsby-theme-docz/src/theme/breakpoints';

export const Container = styled.div`
  z-index: 2 !important;

  .menu-icon {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 50%;
    margin-top: -1.5rem;
    padding: 0.8rem 1rem;
  }
`;

export const InnerContainer = styled.div`
  @media screen and (max-width: ${breakpoints.tablet}px) {
    padding-left: 4rem;
  }
`;

export const FixedHeader = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100 !important;
  + div {
    position: relative;
    margin-top: 80px;

    .sidebar,
    .nav-headings {
      top: 80px;
    }
  }
`;
