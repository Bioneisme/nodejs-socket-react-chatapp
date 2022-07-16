const Person = require('../models/Person')
const UserDto = require('../dtos/user-dto')
const {hash, compare} = require('bcrypt')

class UserController {
    async registration(req, res, next) {
        try {
            const {name, surname, email, password} = req.body
            const hashPassword = await hash(password, 4)

            Person.create({
                name,
                surname,
                email,
                password: hashPassword
            }).then(person => {
                req.session.user = new UserDto(person)
                res.send(person)
            }).catch(e => {
                res.status(400).send({
                    'message': e.name,
                    'constraint': e.parent.constraint
                })
            })
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const person = await Person.findOne({where: {email: email}})

            if (!person)
                return res.status(400).send({'message': 'User with this email doesnt exists'})

            const isPassEquals = await compare(password, person.password)
            if (!isPassEquals)
                return res.status(400).send({'message': 'Incorrect email or password'})

            req.session.user = new UserDto(person)
            res.send(person)
        } catch (e) {
            next(e)
        }
    }

    getUser(req, res) {
        if (!req.session.user) res.status(404).send({'message': 'You must be logged in'})
        res.send(req.session.user)
    }

    logout(req, res) {
        req.session.destroy()
        res.send({'message': 'Logout'})
    }
}

module.exports = new UserController()