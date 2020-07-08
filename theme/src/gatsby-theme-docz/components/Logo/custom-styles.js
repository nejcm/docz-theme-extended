import styled from '@emotion/styled';

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: ${({width = 75}) =>
    typeof width === 'string' ? width : `${width}px`};
  max-height: 50px;
  margin-right: 1rem;

  ~ span {
    font-size: 1.25rem;
    word-break: break-word;
    margin-right: 1.25rem;
  }

  @media screen and (max-width: 600px) {
    ~ span {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 500px) {
    margin-right: 0.75rem;

    ~ span {
      font-size: 1.05rem;
      margin-right: 0.75rem;
    }
  }
  @media screen and (max-width: 400px) {
    ~ span.h-sm {
      display: none;
    }
  }
`;
