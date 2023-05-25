'use client';
import { useState } from 'react';

export default function List() {
  const [quantity, setQuantity] = useState([0, 0, 0]);
  let contents = ['Tomatoes', 'Pasta', 'Coconut'];

  function handleClick(idx, func) {
    if (func === 'minus') {
      if (quantity[idx] !== 0) {
        setQuantity(quantity.with(idx, quantity[idx] - 1));
      }
    } else {
      setQuantity(quantity.with(idx, quantity[idx] + 1));
    }
  }

  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {contents.map((content, i) => {
        return (
          <div key={i} className='food'>
            <img src={`/food${i}.png`} className='food-img' />
            <h4>{content} $40</h4>
            <button onClick={() => handleClick(i, 'minus')}>-</button>
            <span> {quantity[i]} </span>
            <button onClick={() => handleClick(i, 'plus')}>+</button>
          </div>
        );
      })}
    </div>
  );
}
