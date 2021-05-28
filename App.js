import './App.css';
import BusinessCardList from './BusinessCardList';
import data from './data.json';
// Common react pattern
// ComponentItem that displays plain information
// ComponentItemList that takes in a list of information, and renders other components

// ComponentItemList renders ComponentItem


function App() {
  return (
    <div className="App" >
      <BusinessCardList list={data} />
      
    </div>
  );
}

export default App;
