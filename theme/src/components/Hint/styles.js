import {css} from '@emotion/core';
import styled from '@emotion/styled';

const getBgColor = ({type = 'default', theme}) => theme.colors[`${type}Light`];

const getColor = ({type = 'default', theme}) => theme.colors[type];

const getIcon = ({type}) => {
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

const iconStyles = ({icon, type, theme}) =>
  icon &&
  css`
      content: '${getIcon({type})}';
      position: absolute;
      font-family: sans-serif;
      width: 22px;
      height: 22px;
      border: solid 2px ${getColor({type, theme})};
      border-radius: 50%;
      font-size: 18px;
      font-weight: bold;
      line-height: 23px;
      color: ${getColor({type, theme})};
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
  padding-left: ${({icon}) => icon && '3.5rem'};

  &:before {
    ${iconStyles};

    ${({icon}) =>
      icon &&
      css`
        top: 1.25rem;
        left: 1rem;
      `}
  }
`;

export const Outer = styled(Container)`
  padding-left: ${({icon}) => icon && '1.5rem'};

  &:before {
    ${iconStyles};
    ${({icon, theme}) =>
      icon &&
      css`
        top: -14px;
        left: -14px;
        background-color: ${theme.colors.background};
        box-shadow: 0 0 0 9px ${theme.colors.background};
      `}
  }
`;
