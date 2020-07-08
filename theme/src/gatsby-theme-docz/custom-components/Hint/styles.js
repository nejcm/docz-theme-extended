import styled from '@emotion/styled';

const getBgColor = ({type = 'default', theme}) => theme.colors[`${type}Light`];
const getColor = ({type = 'default', theme}) => theme.colors[type];
const variantStyles = ({variant, theme}) =>
  variant !== 'outer'
    ? `margin-right: 1rem;`
    : `position: absolute; 
      top: -15px; 
      left: -15px; 
      box-shadow: 0 0 0 6px ${theme.colors.background}; 
      background-color: ${theme.colors.background}; 
      border-radius: 50%;`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 2rem 0;
  padding: 1.25rem 1rem;
  background-color: ${getBgColor};
  border-left: 4px solid ${getColor};
  border-radius: 3px;

  > span {
    line-height: 0;
    ${variantStyles}

    svg {
      color: ${getColor};
    }
  }

  > div {
    width: 100%;
    flex: 1 1 auto;
  }
`;
