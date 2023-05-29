import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import products from './components/products'
import Store from './components/Store';

function App() {
  return (
    <Store products={products} />
  );
}

export default App;
