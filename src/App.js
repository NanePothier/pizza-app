import Header from './components/Layout/Header';
import Card from './components/UI/Card';
import PizzaContent from './components/Pizza/PizzaContent';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header/>
      <Card>
          <PizzaContent/>
      </Card>
    </CartProvider>
  );
}

export default App;
