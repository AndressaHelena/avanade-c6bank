import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import { FaHome, FaCreditCard, FaMoneyCheckAlt } from "react-icons/fa";

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #242424;
  color: #f8f8f8;
  
  ul {
    width: 100%;
    height: 150px;
    overflow-Y: auto;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar-thumb{
      background: #242424;
      outline: 1px solid #9999;
      border-radius: 2px;
    }
    &::-webkit-scrollbar{
      width: 8px;
    }
    
    li {
      font-weight: bold;
      font-size: 1.2rem;
      width: 95%;
      margin-left: 10px;
      display: flex;
      list-style: none;
      line-height: 30px;
      border: solid 4px transparent;
      border-bottom-right-radius: 5px;
      border-bottom-right-radius: 5px;
      
      &:hover {
        background: #888;
        border-left-color: #fffb19;
        cursor: pointer;
      }
      & > a {
        margin-left: 10px;
      }
    }
  }

`


export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li>
          <Link href='#'> 
            <FaHome />
          </Link>
          <a>Início</a>
        </li>
        <li>Extrato</li>
        <li>Transferências</li>
        <li>
          <Link href='#'> 
            <FaMoneyCheckAlt/>
          </Link>
          <a>Pagamentos</a>
        </li>
        <li>
          <Link href='#'> 
              <FaCreditCard />
          </Link>
          <a>Cartões</a>
        </li>
        <li>Crédito</li>
      </ul>
    </MenuContainer>
  )
}
