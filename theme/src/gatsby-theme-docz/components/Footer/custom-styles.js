import styled from '@emotion/styled';
import {breakpoints} from 'gatsby-theme-docz/src/theme/breakpoints';

export const Container = styled.div`
  margin-top: 4rem;
`;

export const Navigation = styled.div`
  border-top: solid 1px ${({theme}) => theme.colors.border};
  padding: 2rem 0;

  .row {
    margin: 0 -1rem;
    display: flex;
    justify-content: space-between;

    > div {
      width: 100%;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }
  }

  .prev,
  .next {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    text-decoration: none;
    border: solid 1px ${({theme}) => theme.colors.border};
    box-shadow: ${({theme}) => theme.boxShadow};
    border-radius: 3px;
    transition: all 0.15s ease;
    color: ${({theme}) => theme.colors.grayLight};
    line-height: 1.4;

    &:hover {
      &,
      .name {
        color: ${({theme}) => theme.colors.primary};
        border-color: ${({theme}) => theme.colors.primary};
      }
    }

    .path {
      font-size: 0.9rem;
      color: ${({theme}) => theme.colors.grayLight};
    }
    .name {
      font-size: 1.1rem;
      font-weight: bold;
      color: ${({theme}) => theme.colors.text};
      transition: all 0.15s ease;
    }
  }

  .prev {
    text-align: right;
  }
  .next {
    text-align: left;
  }

  .icon {
    padding: 0 2px;
    font-size: 3rem;
    line-height: 1;
    margin-top: -0.5rem;
  }

  @media screen and (max-width: ${breakpoints.tablet}px) {
    .row {
      display: block;
    }
  }
`;

export const Updated = styled.div`
  padding: 1.25rem 0;
  color: ${({theme}) => theme.colors.grayLighter};
  font-weight: 500;
  font-size: 0.9rem;
  border-top: solid 1px ${({theme}) => theme.colors.border};
`;
