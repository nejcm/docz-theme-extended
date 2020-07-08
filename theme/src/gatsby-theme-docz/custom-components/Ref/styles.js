import styled from '@emotion/styled';

const getBgColor = ({theme}) => theme.colors.background2;
const getColor = ({theme}) => theme.colors.primary;

export const Wrapper = styled.div`
  margin: 1.25rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${getBgColor};
  color: ${getColor};
  border-radius: 3px;
  box-shadow: 0px 3px 8px 0px rgba(10, 25, 36, 0.1);
  transition: box-shadow 0.2s ease;

  span:first-of-type {
    text-decoration: underline;
  }

  span:last-of-type {
    color: ${({theme}) => theme.colors.gray};
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0px 3px 8px 0px rgba(10, 25, 36, 0.15);
  }
`;
