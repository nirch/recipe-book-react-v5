
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
} 

