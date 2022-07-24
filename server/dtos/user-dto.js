module.exports = class UserDto{
    id;
    email;
    nickname;
    image;

    constructor(model) {
        this.id = model.id;
        this.email = model.email;
        this.nickname = model.nickname;
        this.image = model.image;
    }
}