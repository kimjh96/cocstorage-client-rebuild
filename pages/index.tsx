import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  color: white;
`;

function Index() {
  return <Box>Index</Box>;
}

export default Index;
