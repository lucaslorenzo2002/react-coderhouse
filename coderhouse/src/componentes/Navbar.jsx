import React,{useState} from 'react';
import '../hojas-de-estilo/navbar.css';
import Burger from "./BurgerBtn";
import styled from 'styled-components'
import CartWidget from './CartWidget';
import { NavLink, Link } from "react-router-dom";


 function Navbar(){

    const[click, setClick] = useState(false)    

    const handleClick = () => {
        setClick(!click)
    }
    
    return(
    <>
        <NavContainer>
            <Link to="/"><h2 className='appLogo'>KA<span>VAN</span></h2></Link>
            <div className= {`links ${click ? "active" : ""}`}>
                <NavLink to="" activeClassName = "active">Home</NavLink>
                <NavLink to="productos" activeClassName = "active">Productos</NavLink>
                <NavLink to="contacto" activeClassName = "active">Contacto</NavLink>
            </div>
                <Link to="cart"><CartWidget /></Link>
            </NavContainer>
    </>
    )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    object-fit: contain;
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  height: 110px;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .active{
    background-color: red;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  @media(min-width: 768px){
  .burguer{
      display: none;
    }
  }
`


