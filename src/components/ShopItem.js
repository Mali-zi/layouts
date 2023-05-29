function ShopItem({ name, price, color, img }) {
  return (
    <div>
      <img src={img} alt=" "></img>
      <span>{name}</span>
      <span>{color}</span>
      <span>{price}</span>
      <button type="button">Add to cart</button>
    </div>
  )
};

export default ShopItem; 