import Header from './components/Layout/Header';
import Card from './components/UI/Card';
import PizzaContent from './components/Pizza/PizzaContent';

function App() {
  return (
    <div>
      <Header/>
      <Card>
          <PizzaContent/>
      </Card>
    </div>
  );
}

export default App;
