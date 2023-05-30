import ShopItem from './ShopItem';
import Row from 'react-bootstrap/Row';

function ListView({ items }) {

  const itemList = items.map((item, index) => {
    const { name, price, color, img } = item;
    return (
      <Row>
        <ShopItem 
          key={index}
          name={name} 
          price={price} 
          color={color} 
          img={img} 
        />
      </Row>
    )
  });
  return (
    <Row>
      {itemList}
    </Row>
  )
};

export default ListView;