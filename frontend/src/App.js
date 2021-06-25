import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Landing from './Components/Landing';

function App() {

  /*
  useEffect(() => {
    store.dispatch(loadUser())
  })*/
  return (
    <Router>
      <div className="App">
       
        <div className="container container-fluid">
          <Route path='/' component={Landing} exact></Route>
          <Route path='/user/login' component={Login} exact></Route>
          <Route path='/user/signup' component={Signup} exact></Route>


          
        </div>
      </div>
    </Router>
    
  );
}


export default App;
