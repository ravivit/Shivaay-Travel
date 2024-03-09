import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import logo from '../assets/shivaaytravel.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export default function NevBar() {
    const [navbarState, setNavbarState] = useState(false);
  return (
    <>
        <Nav>
            <div className="brand">
                <div className="container">
                    <img src={logo} alt="" />
                    Shivaaytravels
                </div>
                <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#recommend">Places</a></li>
                <li><a href="#testimonials">Testimonial</a></li>
                <li><a href="#visa">Visa</a></li>
            </ul>
            <button>connect</button>
        </Nav>
        <Responsivenav state={navbarState}>
        <ul>
                <li><a href="#home" onClick={()=>setNavbarState(false)}>Home</a></li>
                <li><a href="#services" onClick={()=>setNavbarState(false)}>Services</a></li>
                <li><a href="#recommend" onClick={()=>setNavbarState(false)}>Places</a></li>
                <li><a href="#testimonials" onClick={()=>setNavbarState(false)}>Testimonial</a></li>
                <li><a href="#visa" onClick={()=>setNavbarState(false)}>Visa</a></li>
                <li><button  onClick={()=>setNavbarState(false)}>connect</button></li>
            </ul>
            
        </Responsivenav>
    </>
  )
}
const Nav=styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
.brand{
    .container{
        cursor:pointer;
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:0.4rem;
        font-size:1.2rem;
        font-weight:900;
        text-transform:uppercase;
        img{
            height:3rem;
            width:3rem;
        }
    }
    .toggle{
        display:none;
    }
}
    ul{
        display:flex;
        gap: 1rem;
        list-style-type:none;
        li{
            a{
                text-decoration:none;
                color:green;
                font-size:1.2rem;
                transition:0ms.1s ease-in-out;
                &:hover{
                    color:#48cae4;
                }
            }
            &:first-of-type{
                a{
                    color:#48cae4;
                    font-weight:900;
                }
            }
        }
    }
    button{
        padding:0.5rem 1rem;
        cursor:pointer;
        border-radius:0.8rem;
        border:none;
        color:white;
        background-color:#48cae4;
        text-transform:uppercase;
        font-size:1.1rem;
        letter-spacing:0.1rem;
        transition:0.3s ease-in-out;
        &:hover{
            background-color:#023e8a;
            scale:1.1;
        }
    }

@media screen and (min-width:280px) and (max-width:1080px)
{
    .brand{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        .toggle{
            display:block;
        }
    }
    ul,button{
        display:none;
    }
}`;
const Responsivenav = styled.div`
display: flex;
position: absolute;
z-index: 7;
top: ${({ state }) => (state ? "50px" : "-400px")};
background-color: white;
height: 30vh;
width: 80%;
align-items: center;
transition: 0.3s ease-in-out;
ul {
  list-style-type: none;
  width: 100%;
  li {
    width: 100%;
    margin: 1rem 0;
    margin-left: 2rem;

    a {
      text-decoration: none;
      color: #0077b6;
      font-size: 1.2rem;
      transition: 0.1s ease-in-out;
      &:hover {
        color: #023e8a;
      }
    }
      button{
        padding:0.3rem;
        color:white;
        background-color:#48cae4;
        border-radius:0.2rem;
        transition:0.3s ease-in-out;
        &:hover{
            sacle:1.1;
        }
      
    }
    &:first-of-type {
      a {
        color: #023e8a;
        font-weight: 900;
      }
    }
  }
}
`;
