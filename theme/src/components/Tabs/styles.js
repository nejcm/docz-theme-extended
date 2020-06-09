import styled from '@emotion/styled';

const getColor = ({theme}) => theme.colors.text;
const getBorderColor = ({theme}) => theme.colors.border;
const getBackground = ({theme}) => theme.colors.background;
const getLightColor = ({theme}) => theme.colors.gray2;

export const Wrapper = styled.div``;

export const Tabs = styled.div`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 2;

  > div {
    padding: 0.5rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.02);
    border: solid 1px ${getBorderColor};
    border-bottom: none;
    outline: none;
    font-size: 0.95rem;
    cursor: pointer;
    color: ${getLightColor};
    transition: all 0.1s ease-in-out;

    &:first-of-type {
      border-top-left-radius: 3px;
    }
    &:last-of-type {
      border-top-right-radius: 3px;
    }
    &:not(:last-of-type) {
      border-right: transparent;
    }

    &:hover {
      color: ${getColor};
    }
    &.active {
      background-color: ${getBackground};
      color: ${getColor};
      font-weight: bold;
      border-bottom: none;
    }
  }
`;

export const TabPane = styled.div`
  background-color: ${getBackground};
  padding: 1.5rem;
  border: 1px solid ${getBorderColor};
  border-radius: 0 3px 3px 3px;
  margin-top: -1px;
`;
