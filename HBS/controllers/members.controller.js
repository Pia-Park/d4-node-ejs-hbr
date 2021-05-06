const { v4: uuidv4 } = require('uuid')
const members = require('../model/Member')

exports.getOneMembers = (req, res, next) => {
    const found = members.some((member)=> member.id === req.params.id)
    
    if(found){
        res.json(members.filter(member => {
            return member.id === req.params.id
        }))
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
    }
    
}

exports.postMembers = (req, res, next) => {
    const newMember = {
        id: uuidv4(),
        status: 'active',
        ...req.body
    }
    members.push(newMember)
    res.redirect('/')
    
}
