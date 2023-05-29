import ShopCard from './ShopCard';

function CardsView({ cards }) {
  const itemList = cards.map(item => {
    const { name, price, color, img } = item;
    return (
      <ShopCard 
        name={name} 
        price={price} 
        color={color} 
        img={img} 
      />
    )
  });
  return (
    {itemList}
  )
};

export default CardsView;