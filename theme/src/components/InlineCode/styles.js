import styled from '@emotion/styled';

export const Container = styled.code`
  position: relative;
  display: inline-block;
  background-color: #f3f3f3;
  color: ${({theme}) => theme.colors.grayDark};
  font-family: Consolas, monaco, monospace;
  font-size: 0.9em;
  letter-spacing: -0.3px;
  padding: 4px 8px;
  border-radius: 3px;
`;
