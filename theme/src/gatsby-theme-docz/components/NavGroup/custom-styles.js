import styled from '@emotion/styled';

export const Container = styled.div`
  .nav-button {
    width: 100%;
    border: none;
    background-color: transparent;
    margin: 0;
    padding: 0.4rem 1.5rem;
    transition: opacity 0.2s ease;

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 0.8;
    }

    svg {
      width: 1.1rem;
    }
  }
`;
