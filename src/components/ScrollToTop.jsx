import React,{useState} from 'react'
import styled from 'styled-components'
import chevron from '../assets/up-chevron.png'

export default function ScrollToTop() {
  const [Scrollstate,setscrollstate]=useState(false);
  window.addEventListener("scroll",()=>{
    window.pageYOffset >200 ? setscrollstate(true):setscrollstate(false);
  })
  const travel=()=>{
    window.scrollTo({top:0});
  }
  return (
    <ToTop Scrollstate={Scrollstate} onClick={travel}>
      <img src={chevron} alt="" />
    </ToTop>
  )
}
const ToTop=styled.div`
display:${({Scrollstate}) => (Scrollstate ? "block":"none")};
position:fixed;
bottom:1rem;
right:2rem;
z-index:10;

cursor:pointer;
img{
  height:2rem;
  padding:0.3rem;
  
  
}
background-color:orange;
border-radius:1rem;`;
