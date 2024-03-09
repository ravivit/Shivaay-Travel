import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2022 Shivay travel. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li><a href="#visa">Visa</a></li>
      </ul>
      <ul className="social__links">
        <li>
          
          <a href="https://www.facebook.com/people/Shivaaytravels/100093819630422/"><BsFacebook /></a>
        </li>
        <li>
         
          <a href="https://www.instagram.com/shivaaytravels3/"> <AiFillInstagram /></a>
        </li>
        <li>
         
            <a href="https://www.instagram.com/shivaaytravels3/"> <BsLinkedin/></a>
          
        </li>
        
      </ul>
    </FooterContainer>
  );
}
const FooterContainer=styled.footer`
display:flex;
justify-content:space-between;
background-color:#d0d8ff;
padding:2.5rem;
border-radius:0.5rem;
ul{
  display:flex;
  list-style-type:none;
  justify-content:space-between;
  gap:1rem;
  a{
    text-decoration:none;
  }
}
@media screen and (min-width:280px) and (max-width:1024px){
  flex-direction:column;
  gap:2rem;
  .links{
    display:flex;
    flex-direction:column;
  }
  .social__links{
    flex-diection:row;
  }

}`;
