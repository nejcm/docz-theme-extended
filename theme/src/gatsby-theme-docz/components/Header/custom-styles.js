import styled from '@emotion/styled';
import { breakpoints } from 'gatsby-theme-docz/src/theme/breakpoints';

export const Container = styled.div`
  .menu-icon {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 50%;
    margin-top: -1.5rem;
    padding: .8rem 1rem;
  }
`;

export const InnerContainer = styled.div`
  @media screen and (max-width: ${breakpoints.tablet}px) {
    padding-left: 4rem;
  }
`;