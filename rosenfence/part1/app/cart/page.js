import Banner from '../components/Banner';
import CartItem from '../components/CartItem';

export default function Cart() {
  let items = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
      <h4 className='title'>Cart</h4>
      {items.map((item, i) => (
        <CartItem itemName={item} key={i} />
      ))}
      <Banner cardName='현대카드' />
      <Banner cardName='롯데카드' />
    </div>
  );
}
