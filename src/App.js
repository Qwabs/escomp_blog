import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
       <div className="content">
       <Home />
       </div>
      </header>
    </div>
  );
}

export default App;
