import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import data from './data.js';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cardsList">
        {cards}
      </section>
    </div>
  );
}

export default App;
