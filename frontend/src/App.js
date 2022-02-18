import Card from './components/Card';
import Fetch from './components/Fetch';

function App() {
  return (
    <div className="App">
      <Fetch url="http://localhost:1337/api/books?populate=*"/>
    </div>
  );
}

export default App;
