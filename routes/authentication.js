const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');

router.post('/register', async (req, res) => {
  const { name, email, phone, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 15); // hashing the password before saving to db
  try {
    const createUser = await User.create({
      name, email, phone, password
    });
    console.log('User created successfully', createUser);
  } catch (err) {
    console.log('error in record');
    console.log(err);
    return res.status(400).json({ status: 'FAILIURE', error: err });
  }
  res.status(200).json({ status: 'SUCCESS', msg: 'User registered successfully' });
});

module.exports = router;