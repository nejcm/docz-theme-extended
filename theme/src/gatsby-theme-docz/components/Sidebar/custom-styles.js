import styled from "@emotion/styled";

export const Label = styled.div`
  font-size: .8rem;
  color: ${({ theme }) => theme.colors.gray2};
  font-weight: bold;
  margin-bottom: .3rem;
  text-transform: uppercase;
  letter-spacing: .75px;
`;

export const Group = styled.div`
  margin-bottom: 1.25rem;
`;

export const SearchContainer = styled.div`
  input {
    padding: 8px 0;
  }
`;