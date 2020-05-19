import styled from '@emotion/styled';

const getBgColor = ({ theme }) => theme.colors.background;
const getColor = ({ theme }) => theme.colors.primary;

export const Link = styled.a`
  margin: 2rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${getBgColor};
  color: ${getColor};
  border-radius: 3px;
  box-shadow: 0px 3px 8px 0px rgba(10, 25, 36, 0.1);
`;
