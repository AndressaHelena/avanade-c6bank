import React from 'react';
import styled from '@emotion/styled';
import Register from '../components/Form/Cadastro';


const Container = styled.body`
 
  background-size: cover;
  display: flex;
  height: 100vh;
  width: 100%;
`


export default function RegisterPage() {
  return (
    <Register />
  )
}
