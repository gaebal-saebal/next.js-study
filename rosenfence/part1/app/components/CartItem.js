export default function CartItem({ itemName }) {
  return (
    <div className='cart-item'>
      <p>{itemName}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
