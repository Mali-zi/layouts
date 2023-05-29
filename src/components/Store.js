import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from './CardsView';
import ListView from './ListView';

function Store({ products }) {

  const [icon, setIcon] = useState('view_module');
  function onSwitch() {
    icon === 'view_module' ? setIcon('view_list') : setIcon('view_module');
  };

  return (
    <div>
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {icon === 'view_module' ? <CardsView cards={products}/> : <ListView items={products} />}
    </div>
  )
}

export default Store;