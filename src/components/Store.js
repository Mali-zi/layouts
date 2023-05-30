import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from './CardsView';
import ListView from './ListView';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Store({ products }) {

  const [icon, setIcon] = useState('view_module');
  function onSwitch() {
    icon === 'view_module' ? setIcon('view_list') : setIcon('view_module');
  };

  return (
    <Container fluid="md">
      <Row>
        <IconSwitch icon={icon} onSwitch={onSwitch} />
      </Row>
      {icon === 'view_module' ? <CardsView cards={products}/> : <ListView items={products} />}
    </Container>
  )
}

export default Store;