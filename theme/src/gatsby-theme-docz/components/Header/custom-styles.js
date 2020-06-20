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
  button.minimal,
  a.minimal {
    background-color: transparent;
    color: ${({theme}) => theme.colors.gray2};
    transition: color 0.2s ease;

    > svg {
      width: 22px;
      height: 22px;
    }

    &:hover {
      color: ${({theme}) => theme.colors.gray};
    }
  }

  @media screen and (max-width: ${breakpoints.tablet}px) {
    padding-left: 4rem;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    button.minimal,
    a.minimal {
      > svg {
        width: 18px;
        height: 18px;
      }
    }
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
