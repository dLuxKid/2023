import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {RiBarChartHorizontalLine} from 'react-icons/ri' 

export const Nav = styled.nav`
background-color: #f8f8f8;
padding:0 5%;
height:4rem;
display: flex;
justify-content: space-between;
font-size: 1.2rem;
position: sticky;
top: 0;
position:sticky;
z-index: 20;
`
export const NavLink = styled(Link)`
  font-weight:700;
  color:#000;
  display:flex;
  text-align:center;
  align-items:center;
  text-decoration: none;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  margin-right:1rem;

  @media screen and (max-width: 960px){
    padding:1rem 0;
    width: 100%;
    display: table;
  }
`

export const Bars = styled(RiBarChartHorizontalLine)`
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
  // display: flex;

  // @media screen and (max-width:960px){
  //   background:#f8f8f8;
  // align-items: center;
  // text-align:center;
  //   flex-direction:column;
  //   border-top:1px solid #f8f8f8;
  //   position:absolute;
  //   top:4rem;
  //   left:-110%;
  // width:100%;
  //   margin:0;
  //   transition: all 0.7s ease;
  // }

  // &.active{
  //   background-color: #f8f8f8;
  //   left:0px;
  //   opacity:1;
  //   transition: all .7s ease;
  //   z-index:1;
  // }

`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  text-align:center;

  @media screen and (max-width:960px){
    width:100%;
  }

`

export const NavBtnLink = styled(Link)`
  font-weight:900;
  padding:0.75rem 1rem;
  background: #0cb8b6;
  color:#f8f8f8 ;
  border:none;
  outline:none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius:5px;

  @media screen and (max-width: 960px) {
    width:100%;
    padding:.8rem 0;
    border-radius:0;
  }

`