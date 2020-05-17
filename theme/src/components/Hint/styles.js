import { css } from '@emotion/core';
import styled from '@emotion/styled';

const getBgColor = ({ type }) => {
  switch (type) {
    case 'info':
      return 'rgba(56, 132, 255, .1)';
    case 'success':
      return 'rgba(0, 219, 136, .1)';
    case 'warning':
      return 'rgba(255, 204, 0, .1)';
    case 'danger':
      return 'rgba(243, 32, 19, .1)';
    default:
      return 'rgba(0, 0, 0, .04)';
  }
};

const getColor = ({ type }) => {
  switch (type) {
    case 'info':
      return 'rgb(56, 132, 255)';
    case 'success':
      return 'rgb(0, 204, 136)';
    case 'warning':
      return 'rgb(255, 204, 0)';
    case 'danger':
      return 'rgb(243, 32, 19)';
    default:
      return 'rgb(0, 0, 0, .3)';
  }
};

const getIcon = ({ type }) => {
  switch (type) {
    case 'info':
      return 'i';
    case 'success':
      return '✓';
    case 'warning':
      return '!';
    case 'danger':
      return '✖';
    default:
      return 'i';
  }
};

const iconStyles = ({ icon, type }) =>
  icon &&
  css`
      content: '${getIcon({ type })}';
      position: absolute;
      font-family: sans-serif;
      width: 22px;
      height: 22px;
      border: solid 2px ${getColor({ type })};
      border-radius: 50%;
      font-size: 18px;
      font-weight: bold;
      line-height: 23px;
      color: ${getColor({ type })};
      text-align: center;
    `;

export const Container = styled.div`
  position: relative;
  margin: 2rem 0;
  padding: 1.25rem 1rem;
  background-color: ${getBgColor};
  border: 0;
  border-style: solid;
  border-color: ${getColor};
  border-left-width: 4px;
  border-radius: 3px;
`;

export const Inner = styled(Container)`
  padding-left: ${({ icon }) => icon && '3.5rem'};

  &:before {
    ${iconStyles};

    ${({ icon }) =>
    icon &&
    css`
        top: 1.3rem;
        left: 1rem;
      `}
  }
`;

export const Outer = styled(Container)`
  padding-left: ${({ icon }) => icon && '1.5rem'};

  &:before {
    ${iconStyles};
    ${({ icon, theme }) =>
    icon &&
    css`
        top: -14px;
        left: -14px;
        background-color: ${theme.colors.background};
        box-shadow: 0 0 0 9px ${theme.colors.background};
      `}
  }
`;