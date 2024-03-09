import React from 'react';
import { useState } from 'react';
import { BsFillCaretRightFill, BsFillCaretDownFill } from 'react-icons/bs';
import styled from 'styled-components';

export default function Questions() {
  const [expand, setExpand] = useState(-1);
  const item = [
    {
      id: '12yz',
      que: 'QUE-why you have to use this site instead of others',
      ans: (
        <ul>
          <li>ans- we provide best packages at relevant cost</li>
          <li>ans- we provide one-to-one interaction</li>
          <li>ans- we provide our personal details for more queries and any issue</li>
        </ul>
      ),
    },
    {
      id: '23xc',
      que: 'QUE-is money refundable',
      ans: (
        <ul>
          <li>ans- yes, if there is any problem from our side, then it is 100% refundable.</li>
          <li>ans- but if it's from your side, then 25% will be deducted.</li>
        </ul>
      ),
    },
  ];

  const rerender = item.map((items, index) => {
    const isExpand = index === expand;
    const counter = isExpand ? <BsFillCaretDownFill /> : <BsFillCaretRightFill />;
    
    const handleclick = () => {
      if (expand === index) {
        setExpand(-1);
      } else {
        setExpand(index);
      }
    };

    return (
      <div key={items.id}>
        <div onClick={handleclick}>
          {items.que}
          {counter}
        </div>
        <div>{isExpand && items.ans}</div>
      </div>
    );
  });

  return (
    <DIV id='question'>
      <h1>Frequent questions</h1>
      <div className="questions">{rerender}</div>
    </DIV>
  );
}

const DIV = styled.div`
  margin: 1rem;
  background-color: #8338ec14;
  padding:2vw;
  
  border-radius:2rem;
  h1 {
    text-align: center;
  }
  .questions {
    display: flex;
    flex-direction: column;
  }
  ul {
    margin: 2em;
  }
  li {
    margin: 0.5rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
