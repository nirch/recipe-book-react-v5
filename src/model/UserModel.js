
export default class UserModel {
    #pwd;   // pwd is a private property
    constructor(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.#pwd = plainUser.pwd;
    }
} 

