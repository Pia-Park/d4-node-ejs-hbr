const { v4: uuidv4 } = require('uuid')

let members = [
    {
        id: uuidv4(),
        name: 'Pakuchi',
        email: 'pakupaku@mail.com',
        status: 'active'
    },
    {
        id: uuidv4(),
        name: 'andrew',
        email: 'belly@mail.com',
        status: 'active'
    }
    
]

module.exports = members