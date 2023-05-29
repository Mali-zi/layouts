import ShopItem from './ShopItem';

function ListView({ items }) {

  const itemList = items.map(item => {
    const { name, price, color, img } = item;
    return (
      <ShopItem 
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

export default ListView;