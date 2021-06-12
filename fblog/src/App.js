import './App.css';
import Create from './component/Create';
import Detail from './component/Detail';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Blog from './component/Blog';
import P404 from './component/P404';
// import CardCont from './component/CardCont';
/*
card
blog contenant qlq composant card 
responsive
*/

function App() {
  return (
     <Router>
    <div className="App">
      {/* <Navbar /> */}
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Blog/>
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <Detail />
          </Route>
          <Route path="*">
            <P404 />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
