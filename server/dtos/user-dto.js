module.exports = class UserDto{
    id;
    email;
    nickname;

    constructor(model) {
        this.id = model.id;
        this.email = model.email;
        this.nickname = model.nickname;
    }
}