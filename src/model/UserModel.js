import Parse from 'parse';
import RecipeModel from './RecipeModel';

export default class UserModel {
    #parseUser  // storing the parseUser object as a private field (might need to use it)
    constructor(parseUser) {
        this.id = parseUser.id;
        this.fname = parseUser.get("fname");
        this.lname = parseUser.get("lname");
        this.email = parseUser.get("email");
        this.#parseUser = parseUser;
    }

    static activeUser = null;

    // login is an async function that tries to login the user given the email and password.
    // If successfull it will resolve the promise with a UserModel instance of the logged in user
    // If unsuccessfull it will reject the promise with an appropriate error
    static async login(email, pwd) {
        const parseUser = await Parse.User.logIn(email, pwd);
        UserModel.activeUser = new UserModel(parseUser);
        return UserModel.activeUser;
    }

    static logout() {
        UserModel.activeUser = null;
        Parse.User.logOut();
    }

    static loadActiveUser() {
        UserModel.activeUser = Parse.User.current() ? new UserModel(Parse.User.current()) : null;
        return UserModel.activeUser;
    }

    async getMyRecipe() {
        const RecipeTable = Parse.Object.extend('Recipe');
        const query = new Parse.Query(RecipeTable);
        query.equalTo("userId", this.#parseUser);
        const parseRecipes = await query.find();
        const recipes = parseRecipes.map(parseRecipe => new RecipeModel(parseRecipe));
        return recipes;
    }
} 

