import Parse from 'parse';

export default class UserModel {
    #parseUser  // storing the parseUser object as a private field (might need to use it)
    constructor(parseUser) {
        this.id = parseUser.id;
        this.fname = parseUser.get("fname");
        this.lname = parseUser.get("lname");
        this.email = parseUser.get("email");
        this.#parseUser = parseUser;
    }

    // login(email, pwd) {
    //     return email.toLowerCase() === this.email.toLowerCase() && pwd === this.#pwd;
    // }


    // login is an async function that tries to login the user given the email and password.
    // If successfull it will resolve the promise with a UserModel instance of the logged in user
    // If unsuccessfull it will reject the promise with an appropriate error
    static async login(email, pwd) {
        const parseUser = await Parse.User.logIn(email, pwd);
        const activeUser = new UserModel(parseUser);
        return activeUser;
    }

    static logout() {
        Parse.User.logOut();
    }

    static activeUser() {
        return Parse.User.current();
    }
} 

