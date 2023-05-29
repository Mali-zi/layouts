function ShopCard({ name, price, color, img }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{color}</p>
      <div>
        <img src={img} alt=" "></img>
      </div>
      <div>
        <span>{price}</span>
        <button type="button">Add to cart</button>
      </div>
    </div>
  )
};

export default ShopCard; 