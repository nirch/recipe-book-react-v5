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
import UserModel from './model/UserModel';
import Parse from 'parse';


function App() {
  const [activeUser, setActiveUser] = useState(Parse.User.current() ? new UserModel(Parse.User.current()) : null);

  function handleLogout() {
    setActiveUser(null);
    Parse.User.logOut();
  }

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" >
            <RecipeNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)}/>
            <HomePage/>
          </Route>
          <Route exact path="/login"><LoginPage activeUser={activeUser} onLogin={user => setActiveUser(user)}/></Route>
          <Route exact path="/signup"><SignupPage activeUser={activeUser} onLogin={user => setActiveUser(user)}/></Route>
          <Route exact path="/recipes">
            <RecipeNavbar activeUser={activeUser} onLogout={handleLogout} />
            <RecipesPage activeUser={activeUser} />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
