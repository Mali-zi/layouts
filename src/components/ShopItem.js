import Button from 'react-bootstrap/Button';


function ShopItem({ name, price, color, img }) {
  return (
    <div className="container-md text-center">
      <div className="row justify-content-md-center align-items-center list-row">
        <div className="col">
          <img className="img-fluid item-img" src={img} alt={name}></img>
        </div>
        <div className="col">
          <span className='item-title'>{name}</span>
        </div>
        <div className="col">
          <span className='card-subtitle'>{color}</span>
        </div>
        <div className="col">
          <span className='card-price'>${price}</span>
        </div>
        <div className="col">
          <Button variant="outline-danger" className='item-btn'>Add to cart</Button>
        </div>
      </div>
    </div>
  )
};

export default ShopItem; 