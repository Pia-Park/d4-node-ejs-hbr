const express = require('express')
const { v4: uuidv4 } = require('uuid')
const members = require('../model/Member')
const membersContoller = require('../controllers/members.controller')

const router = express.Router()



router.get('/', (req, res, next) => {
    res.json(members)
})

router.get('/:id', membersContoller.getOneMembers)
router.post('/post', membersContoller.postMembers)

// router.get('/:id', (req, res, next) => {
//     const found = members.some((member)=> member.id === req.params.id)

//     if(found){
//         res.json(members.filter(member => {
//             return member.id === req.params.id
//         }))
//     } else {
//         res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
//     }

// })

// router.post('/post', (req, res, next) => {
//     const newMember = {
//         id: uuidv4(),
//         status: 'active',
//         ...req.body
//     }
//     members.push(newMember)
//     res.redirect('/')
    
// })

router.put('/update/:id', (req, res, next) => {
    const found = members.some((member)=> member.id === req.params.id)

    if(found){
        const updatedMember = members.map(member => {
            if(member.id === req.params.id){
                return{
                    ...member,
                    ...req.body
                }
            }
            return member
        })
        res.json({msg: 'Member updated', updatedMember})
    } else{
        res.status(400).json({ msg: `No update with the id of ${req.params.id}`})
    }

    
})

router.delete('/delete/:id', (req, res, next) => {
    const found = members.some((member)=> member.id === req.params.id)

    if(found){
        res.json({
            msg: 'Member deleted succed',
            member: members.filter(member => member.id !== req.params.id)
        })
    } else {
        res.status(400).json({ msg: `No delete with the id of ${req.params.id}`})
    }
    
})


module.exports = router