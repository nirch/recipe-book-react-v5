import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" ><HomePage/></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/signup" ><SignupPage/></Route>
          <Route exact path="/recipes" ><RecipesPage/></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
