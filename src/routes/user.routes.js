// src/routes/user.routes.js
const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');

router.get('/me', auth, getProfile);
router.put('/me', auth, updateProfile);

module.exports = router;
