import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  * {
    box-sizing: border-box;
  }
`;

const GlobalStyles = (props) => <Container {...props} />;

export default GlobalStyles;
