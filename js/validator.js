const express = require('express')
const app = express()

app.use(express.json())

app.post('/form', (req, res) => {
  const name  = req.body.name
  const email = req.body.email

})


const { check, validationResult } = require('express-validator');

app.post('/form'), [

    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
  ], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
  
 
    const email = req.body.email
    const password  = req.body.name

  })