import './App.css';
import Navbar from './components/navbar.js'
import Card from './components/Card.js'
import data from './data.js'

function App() {

  const cardData = data.map((item) => {
    return <Card key={item.id} 
    item={item}/> //left side item is prop and right side item is object
  })
  return (
    <div className="App">
     <Navbar/>
      {cardData}
    </div>
  );
}

export default App;
