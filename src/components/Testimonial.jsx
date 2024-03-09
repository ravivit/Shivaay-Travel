import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Meet our Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
           she was gone on a trip of Berlin with their siblings,she thanks a lot to us for that fantastic package.
          </p>
          <div className="info">
            <img src="https://img.freepik.com/free-photo/beautiful-female-half-length-portrait-yellow-studio_155003-28328.jpg?size=626&ext=jpg" alt="" />
            <div className="details">
              <h4>Ananya sharma</h4>
              <span>location-she is from noida Delhi</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
           she was gone on a trip of italy with her boyfriend,and gives thanks a lot for that amazing package that we provided.
          </p>
          <div className="info">
            <img src="https://images.pexels.com/photos/1376040/pexels-photo-1376040.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="details">
              <h4>Jiya singh</h4>
              <span>location-she is from gurugram delhi</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            six month ago they visited miammi with their family.they are our first us customer. 
          </p>
          <div className="info">
            <img src="https://images.pexels.com/photos/3968119/pexels-photo-3968119.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="details">
              <h4>Kylen feuri</h4>
              <span>location-st-mid-square-6 new jersy US</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section=styled.section`
margin:5rem 0;
.title{
  text-align:center;
  margin-bottom:2rem;
}
.testimonials{
  display:flex;
  justify-content:center;
  margin:0 2rem;
  gap:2rem;
  .testimonial{
    display:flex;
    flex-direction:column;
    padding:2rem;
    gap:0.8rem;
    background-color:aliceblue;
    border-radius:1rem;
    transition:0.3s ease-in-out;
    box-shadow:rgba(100,100,111,0.2) 0px 5px 15px;
    &:hover{
      transform:translateY(1rem) translateX(-1rem);
      box-shadow:rgba(110,111,111,0.8) 0px 10px 29px 0px;
    }
    
    .info{
      img{
     height:3rem;
     border-radius:3rem;
    



      }
    }
  }
  
}
@media screen and (min-width:280px) and (max-width:768px){
  .testimonials{

  flex-direction:column;
  margin:0;
  .testimonial{
    justify-content:center;
    .info{
      flex-direction:column;
      justify-content:center;
    }
  }
  }
}`;