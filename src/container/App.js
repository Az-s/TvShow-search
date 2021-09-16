import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Search from '../components/Search.js/Search';
import ShowInfo from '../components/ShowInfo/ShowInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Search />
        <Route path='/shows/:id' component={ShowInfo} />
      </Router>
    </div>
  );
}

export default App;
