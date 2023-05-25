import Hello from './data';

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta'];
  return (
    <>
      <div>
        <Hello />
        <h4 className='title'>Cart</h4>
        <CartItem 장바구니={장바구니[0]} />
        <CartItem 장바구니={장바구니[1]} />
      </div>
      <div>
        <RedBtn color='red' />
        <RedBtn color='blue' />
      </div>
    </>
  );
}

function CartItem({ 장바구니 }) {
  return (
    <div className='cart-item'>
      <p>{장바구니}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function RedBtn({ color }) {
  return <button style={{ backgroundColor: `${color} ` }}>Red</button>;
}
