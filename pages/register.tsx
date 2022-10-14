import React from 'react';
import styled from '@emotion/styled';


const Container = styled.body`
 
  background-image: url('/logo.jpg');
  background-size: cover;
  display: flex;
  height: 100vh;
  width: 100%;
`


export default function RegisterPage() {
  return (
    <Container>register</Container>
  )
}
