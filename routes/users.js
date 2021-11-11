var express = require('express')
var router = express.Router()

const mysql = require('mysql2')
const connection = require('../config/db')

/* GET users listing. */
router.post('/post', async function(req, res, next) {
    const payload = Object.values(req.body)

    try {
        const results = await connection.query(
            'insert into test(email, details ) values(? ,?)', [...payload]
        )
        console.log('results are ', results)
        res.redirect('/users/posts')
    } catch (error) {
        console.log('error is ', error)
        res.send('error')
    }

    // res.json({ message: req.body })
})

// get users
router.get('/posts', async(req, res, next) => {
    try {
        const results = await connection.query('select email, details from test')
        console.log('results are ', results[0])
        res.send(results[0])
    } catch (error) {
        console.log('error fetching code', error)
        res.send('error fetching ')
    }
})

module.exports = router