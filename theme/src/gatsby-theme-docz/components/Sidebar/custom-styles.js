import styled from '@emotion/styled';

export const Container = styled.div`
  .sidebar {
    height: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Label = styled.div`
  font-size: 0.8rem;
  color: ${({theme}) => theme.colors.gray2};
  font-weight: bold;
  padding: 0 1.5rem;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
`;

export const Group = styled.div`
  margin-bottom: 1.25rem;
`;

export const SearchContainer = styled.div`
  padding: 0 1.5rem;

  input {
    padding: 8px 0;
  }
`;
