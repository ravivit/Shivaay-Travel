import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import whatsapp from "../assets/whatsapp.png"

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "53,180/",
      dist:"5,878",
      duration: " 4 night 5 day trip",
      link:"https://wa.link/jagzc6"
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "60,417/",
      dist:"4,217",
      duration: " 5 night 4 day trip",
      link:"https://wa.link/duq1qs"
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "1,23,000/",
      dist:"7,329",
      duration: " 6 night 7 days trip",
      link:"https://wa.link/d2aeb2"
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the Europe continent",
      cost: "3,16,132/",
      dist:"13,403",
      duration: "7 night 8 day trip",
      link:"https://wa.link/ajc9x5"
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "1,62,693/",
      dist:"14,662",
      duration: " 7 night 6 day trip",
      link:"https://wa.link/c3bir8"
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "79,445/",
      dist:"7,481",
      duration: "3 night 2 day trip",
      link:"https://wa.link/s5csnm"
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
      {
        data.map((destination)=> {
          return (
            <div className="destination">
              <img src={destination.image} alt="destination image" />
              <h3>
                {destination.title}
              </h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>

              </div>
              <div className="distance">
                <span>{destination.dist} Km</span>
                <span>{destination.duration}</span>
                <a href={destination.link}><img src={whatsapp} alt=""  /></a>
              </div>
            </div>
          );
          }
        )
        }
      </div>
      
    </Section>
  );
}

const Section = styled.section`
  
padding:2rem 0;
.title{
  text-align:center;
}
.packages{
  display:flex;
  justify-content:center;
  margin:2rem 0;
  ul{
    display:flex;
    list-style-type:none;
    width:max-content;
    li{
      padding:1rem 2rem;
      border-bottom:0.1rem solid black;
    }
    .active{
      border-bottom:0.5rem solid #8338ec;
    }
  }
}
.destinations{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:3rem;
  padding:0 3rem;
  .destination{
    padding:1rem;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    background-color:#8338ec14;
    border-radius:1rem;
    box-shadow:rgba(100,100,111,0.2) 0px 5px 15px;
    transition:0.3s ease-in-out;
    &:hover{
          transform:translateX(1rem) translateY(-1rem);
          box-shadow:rgba(110,111,111,0.8) 0px 10px 29px 0px;
        }
    img{
      width:100%;
    }
    .info{
      .services{
        display:flex;
        justify-content:space-between;
       
        img{
           width:2rem;
           border-radius:1.5rem;
           padding:0.5rem 0rem;
           background-color:black;
        }
       
      }
    }
    .distance{
      display:flex;
      justify-content:space-between;
      a{
        width:2rem;
        height:2rem;
      }
    }
  }
}
@media screen and (min-width:280px) and (max-width:980px){
  .packages{
    ul{
      li{
        padding:0 0.5rem;
        font-size:2vh;
        padding-buttom:1rem;
      }
      .active{
        border-bottom-width:0.3rem;
      }
    }
  }
  .destinations{
    grid-template-columns:1fr;
    padding:0;
  }
}`;
