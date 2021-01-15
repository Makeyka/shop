import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'Estabon Villalon',
        email: 'est@gmail.com',
        password: bcrypt.hashSync('12345', 10)
    },
    {
        name: 'Natash Stacy',
        email: 'natsh@gmail.com',
        password: bcrypt.hashSync('12345', 10)
    }
]

export default users