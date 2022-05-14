import styled from 'styled-components'
import {NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa' 

export const Nav = styled.nav`
background-color: #f8f8f8;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
position:sticky;
z-index: 20;
`
export const NavLink = styled(Link)`
  font-weight:900;
  color:#000;
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration: none;
  height:100%;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem ;
  border-bottom: 3px solid transparent;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #0CB8B6;

  @media screen and (max-width:960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    height: auto;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items:center;
  margin-right: -1.5rem; 

  @media screen and (max-width:960px){
    background:#f8f8f8;
    width:100%;
    margin:0;
  }

  &.active{
    background-color: #f8f8f8;
    left:0px;
    opacity:1;
    transition: all .7s ease;
    z-index:1;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #0CB8B6 !important;
  padding:.625rem 1.375rem;
  color:#f8f8f8 !important;
  border:none;
  outline:none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`