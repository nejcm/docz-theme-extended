import styled from '@emotion/styled';

const button = () => `
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export const DrawerContainer = styled.div`
  position: fixed;
  z-index: 101;
  visibility: hidden;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.25s ease-in-out;

  > div {
    position: relative;
    height: 100%;
    margin-left: auto;
    max-width: 380px;
    padding: 3.5rem 1.5rem 1.5rem;
    overflow: hidden;
    transition: transform 0.25s ease-in-out;
    transform: translateX(100%);
    border-left: 1px solid rgba(0, 0, 0, 0.07);
    background-color: ${({theme}) => theme.colors.background};
    box-shadow: -3px 0px 3px 1px rgba(0, 0, 0, 0.05);
  }

  &.open {
    visibility: visible;
    background-color: ${({theme}) => theme.colors.backdrop};

    > div {
      transform: translateX(0);
    }
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.42rem;
  margin: 0.5rem 0.6rem;
  ${button}
  background-color: rgba(0, 0, 0, 0.07);
  transition: background-color 0.2s ease;
  font-size: 1.2rem;
  color: ${({theme}) => theme.colors.gray2};
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #bbb;
    padding: 0.6rem 2rem 0.6rem 0.8rem;
    font-size: 18px;
    color: ${({theme}) => theme.colors.text};
    outline: none;
  }
`;

export const Submit = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.6rem 0.5rem;
  line-height: 1;
  color: ${({theme}) => theme.colors.gray2};
  transition: opacity 0.2s ease;
  ${button}

  &:hover {
    opacity: 0.7;
  }
`;

export const Results = styled.div`
  > a {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: ${({theme}) => theme.colors.text};
    text-decoration: none;

    h4 {
      margin: 0;
      line-height: 1.2;
    }

    > span {
      font-size: 0.9rem;
      color: ${({theme}) => theme.colors.gray2};
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;
