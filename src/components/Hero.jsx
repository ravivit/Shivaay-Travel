import React from 'react'
import styled from 'styled-components'
import homeImage from "../assets/hero.png";

export default function Hero() {
  return (
    <Section id='hero'>
    <div className="background">
        <img src={homeImage} alt="" />
    </div>
    <div className="content">
        <div className="title">
            <h1>travel to explore</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab totam id nesciunt dicta itaque amet maiores laudantium sit, libero minus aliquid  
            </p>
        </div>
        <div className="search">
            <div className="container">
                <label htmlFor="">where you ewant to go</label>
                <input type="text" placeholder='search your location' />
            </div>
            <div className="container">
                <label htmlFor="">check in</label>
                <input type="date"  />
            </div>
            <div className="container">
                <label htmlFor="">check out</label>
                <input type="date"  />
            </div>
            <button><a href="#">Explore now</a></button>
        </div>
    </div>
      
    </Section>
  )
}
const Section=styled.section`
position:relative;
margin-top:2rem;
width:100%;
height:100%;
.background{
    height:100%;
    img{
        width:100%;
        filter:brightness(60%);
    }

}
.content{
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    z-index:3;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;
    .title{
        color:white;
        h1{
            font-size:3rem;
            letter-specing:0.2rem;
            text-transform:uppercase;
        }
        p{
            text-align:center;
            padding:0 30vw;
            margin-top:0.5rem;
            font-size:1.2rem;
        }
    }
    .search{
        display:flex;
        background-color:#ffffffce;
        padding:0.5rem;
        border-radius:0.5rem;
      
        .container{
            display:flex;
            flex-direction:column;
           align-items:center;
           justify-content:center;
           padding:0 1.5rem;
           label{
            font-size:1.1rem;
            color:#03045e;
           }
           input{
            background-color:transparent;
            border:none;
            text-align:center;
            color:black;
            &[type="date"]{
                padding-left:1rem;
            }
            &::placeholder{
                color:black;
            }
            &:focus{
                outline:none;
            }
           }
        }
        button{
            
            border-radius:2rem;
            border:none;
            cursor:pointer;
            padding:0 0.5rem;
            background-color:green;
            transition:0.1s ease-in-out;
            &:hover{
                scale:0.9;
                background-color:orange;
            }
           
            a{
                text-decoration:none;
                color:white;
            }
            
        }
    }
}
@media screen and (min-width:280px) and (max-width:980px){
    height:25rem;
    .background{
        img{
            height:100%;
        }
    }
    .content{
        .title{
            h1{
                font-size:1rem;
            }
            p{
                font-size:0.8rem;
                padding:1vw;
            }
        }
        .search{
            flex-direction:column;
            padding:0.8rem;
            gap:0.8rem;
            .container{
                padding:0 0.8rem;
                input[type="date"]{
                    padding-left:1rem;
                }
            }
            button{
                padding:1rem;
                font-size:1rem;
            }
        }
    }

}`;

