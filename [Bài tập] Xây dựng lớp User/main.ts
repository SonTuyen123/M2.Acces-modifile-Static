export class User {
    private _name: string;
    private _email: string;
    private _role: Role;

    constructor(name: string, email: string, role: Role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): Role {
        return this._role;
    }

    set role(value: Role) {
        this._role = value;
    }

    getInfo(): object {
        return {
            "UserName": this.name,
            "UserEmail": this.email,
            "role": this.isAdmin()
        }
    }

    isAdmin(): string {
        if (this.role === 0) {
            return "admin"
        } else if (this.role === 1) {
            return "user"
        } else if (this.role === 2) {
            return "public"
        } else {
            return "role is not defined"
        }
    }
}


enum Role { admin, user, public }

let user1 = new User("tuyen", "tuyen@gmail.com", 1)

console.log(user1.getInfo())