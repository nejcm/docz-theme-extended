import styled from '@emotion/styled';

export const Image = styled.img`
  width: auto;
  height: auto;
  max-width: ${({ width }) => width};
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
  @media screen and (max-width: 400px) {
    margin-right: 0.75rem;

    ~ span {
      font-size: 1rem;
      margin-right: 0.75rem;
    }
  }
`;