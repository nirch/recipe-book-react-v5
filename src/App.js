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
import usersJSON from './data/users.json';
import recipesJSON from './data/recipes.json';
import UserModel from './model/UserModel';
import RecipeModel from './model/RecipeModel';
import ActiveUserContext from './shared/ActiveUserContext'


function App() {
  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  const [recipes, setRecipes] = useState(recipesJSON.map(plainRecipe => new RecipeModel(plainRecipe)));
  const [activeUser, setActiveUser] = useState(users[0]);

  function addRecipe(name, desc, img) {
    const newRecipe = new RecipeModel({
      id: recipes[recipes.length - 1].id + 1,
      name,
      desc,
      img,
      userId: activeUser.id
    });
    
    setRecipes(recipes.concat(newRecipe));
  }


  return (
    <ActiveUserContext.Provider value={activeUser}>
      <HashRouter>
        <Switch>
          <Route exact path="/" >
            <RecipeNavbar onLogout={() => setActiveUser(null)}/>
            <HomePage/>
          </Route>
          <Route exact path="/login"><LoginPage users={users} onLogin={user => setActiveUser(user)}/></Route>
          <Route exact path="/signup"><SignupPage/></Route>
          <Route exact path="/recipes">
            <RecipeNavbar onLogout={() => setActiveUser(null)}/>
            <RecipesPage  
              recipes={activeUser ? recipes.filter(recipe => recipe.userId === activeUser.id) : []}
              onNewRecipe={addRecipe}/>
          </Route>
        </Switch>
      </HashRouter>
    </ActiveUserContext.Provider>
  );
}

export default App;
