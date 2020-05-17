import styled from '@emotion/styled';

const getBgColor = ({ theme }) => theme.colors.background;

export const Link = styled.a`
  margin: 2rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${getBgColor};
  border-radius: 3px;
  box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
`;