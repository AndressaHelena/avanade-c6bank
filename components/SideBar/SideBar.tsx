import React from 'react'
import styled from '@emotion/styled'
import Profile from '../Profile'
import Balance from '../Balance'
import Menu from '../Menu'

const SideBarContainer = styled.div`
position: fixed;
display: flex;
flex-direction: column;
width: 400px;
min-height: 100vh;
`


export default function SideBar() {
  return (
    <SideBarContainer>
      <Profile name='Andressa' role='Intern' agency='0001' accountNumber='123456' />
      <Balance amount={10000000} />
      <Menu />
    </SideBarContainer>
  )
}
