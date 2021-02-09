import styled from '@emotion/styled';
import {breakpoints} from 'gatsby-theme-docz/src/theme/breakpoints';
import React from 'react';

export const icon = (
  <svg
    height="1em"
    width="1em"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 64 64"
  >
    <g>
      <g transform="translate(-19.000000, -41.000000)">
        <path
          d="M19,53.9c0-1.9,1.5-3.4,3.4-3.4h47.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4H22.4
            C20.5,57.3,19,55.8,19,53.9z M19,74.1c0-1.9,1.5-3.4,3.4-3.4h57.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4H22.4
            C20.5,77.5,19,76,19,74.1z M19,94.3c0-1.9,1.5-3.4,3.4-3.4h40.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4H22.4
            C20.5,97.7,19,96.2,19,94.3z"
        />
      </g>
    </g>
  </svg>
);

export const Container = styled.div`
  width: 275px;
  min-width: 275px;
  padding-left: 2rem;

  @media screen and (max-width: ${breakpoints.desktop}px) {
    width: 100%;
    min-width: 0;
    order: -1;
    margin-bottom: 2rem;
    padding-left: 0;
  }
`;

export const Heading = styled.h4`
  margin: 0 0 0.5rem 0;
  padding: 0 1.25rem;
  color: ${({theme}) => theme.colors.gray2};

  > svg {
    vertical-align: -10%;
    fill: ${({theme}) => theme.colors.gray2};
    margin-right: 0.5rem;
  }

  @media screen and (max-width: ${breakpoints.desktop}px) {
    padding-left: 1rem;
  }
`;

export const Sticky = styled.div`
  position: sticky;
  top: 0.5rem;
  font-size: 1rem;
`;

export const Toc = styled.nav`
  padding: 2rem 0;

  > div {
    border-left: solid 1px ${({theme}) => theme.colors.grayLighter};
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
    margin-left: -1px;
    font-weight: 500;

    li {
      margin-bottom: 0;
      line-height: 1.25;
      font-size: 0.85rem;

      a {
        display: block;
        padding: 0.45rem 1.25rem;
        color: ${({theme}) => theme.colors.gray2};
        text-decoration: none;
        transition: all 0.2s ease;
        border-left: solid 2px transparent;

        &.inner {
          padding-left: 2.25rem;
        }

        &:hover {
          color: ${({theme}) => theme.colors.primary};
        }
      }

      &.current {
        a {
          border-left-color: ${({theme}) => theme.colors.primary};
          color: ${({theme}) => theme.colors.primary};
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.desktop}px) {
    padding: 0.5rem 0;

    > div {
      border: none;
      margin-left: -1rem;
      margin-right: -1rem;
    }

    ul {
      li {
        display: inline-block;

        a,
        a.inner {
          position: relative;
          padding: 0.5rem 1rem;
          border: none;

          &:after {
            content: '|';
            position: absolute;
            right: 0;
            color: ${({theme}) => theme.colors.grayLighter};
          }
        }
      }
    }
  }
`;
