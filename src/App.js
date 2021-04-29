import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeNavbar from './components/RecipeNavbar/RecipeNavbar';
import { useState } from 'react';


function App() {
  const [activeUser, setActiveUser] = useState({id: "123", fname: "Nir", lname: "Channes", email: "nir@nir.com"});
  // const [activeUser, setActiveUser] = useState(null);

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" >
            <RecipeNavbar activeUser={activeUser}/>
            <HomePage/>
          </Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/signup" ><SignupPage/></Route>
          <Route exact path="/recipes" >
            <RecipeNavbar/>
            <RecipesPage/>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
