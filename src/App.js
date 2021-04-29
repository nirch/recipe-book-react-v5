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
import usersJSON from './data/users.json'
import UserModel from './model/UserModel';


function App() {
  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  const [activeUser, setActiveUser] = useState(users[0]);
  // const [activeUser, setActiveUser] = useState(null);

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" >
            <RecipeNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)}/>
            <HomePage/>
          </Route>
          <Route exact path="/login"><LoginPage users={users}/></Route>
          <Route exact path="/signup" ><SignupPage/></Route>
          <Route exact path="/recipes" >
            <RecipeNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)}/>
            <RecipesPage activeUser={activeUser}/>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
