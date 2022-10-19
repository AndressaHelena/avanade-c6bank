import React, { useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #242424;
  color: #f8f8f8;
  padding-left: 30px;
  padding-bottom: 30px;
  & > strong{
    font-size:  1.5rem;
    margin-right: 5%;
    padding: 5%;
  }
  & > button{
    border: none;
    background: transparent;
    color: #f8f8f8;
  }

`

type BalanceProps ={
  amount: number;
}

export default function Balance(props:BalanceProps) {
const [show, setShow] = useState<Boolean>(false)


  return (
    <BalanceContainer>
     
    

      { show ?
        <strong>{new Intl.NumberFormat('pt-br', {style: 'currency', currency:'BRL'}).format( props.amount)}</strong>
        :
        <strong>R$ ******</strong>
      }
        <button onClick={() => setShow(!show)}>
        {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </button>
      
    </BalanceContainer>
  )
}
