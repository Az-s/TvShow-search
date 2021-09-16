import { BrowserRouter as Router, Route } from 'react-router-dom';
// import {useDispatch, useSelector} from "react-redux";
// import {fetchShow, fetchShowInfo, fetchProfile, fetchShowLoading} from "./store/actions";
import Navigation from '../components/Navigation/Navigation';
import Search from '../components/Search.js/Search';
import ShowInfo from '../components/ShowInfo/ShowInfo';
import './App.css';

const App = () => {

  // const dispatch = useDispatch();
  // const profile = useSelector(state => state.profile);
  // const fetchShowLoading = useSelector(state => state.fetchShowLoading);
  // const posts = useSelector(state => state.posts);

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
