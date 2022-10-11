class User {
    _id;
    _name;
    _email;
    
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}