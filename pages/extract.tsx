import React from 'react';
import styled from '@emotion/styled';
import SideBar from '../components/SideBar';
import ExtractContent from '../components/Extract/ExtractContent';
const ExtractContainer = styled.div`
display: flex;
width: 100%;
height: 100vh;
`

export default function ExtractPage() {
  return (
    <ExtractContainer>
      <SideBar />
      <ExtractContent />
    </ExtractContainer>
  )
}
