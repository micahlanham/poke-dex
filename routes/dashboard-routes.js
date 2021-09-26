const router = require('express').Router();
const sequelize = require('../config/connection/');
const { Pokemon, User } = require('../models/');
const withAuth = require('../utils/auth/');



module.exports = router;
