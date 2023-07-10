const router = require('express').Router();
const { userIdValidation, userInfoValidation, avatarValidation } = require('../middlewares/validation');

const {
  getUsers, getUserById, updateUser, updateAvatar, getCurrentUser,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/me', getCurrentUser);

router.get('/:userId', userIdValidation, getUserById);

router.patch('/me', userInfoValidation, updateUser);

router.patch('/me/avatar', avatarValidation, updateAvatar);

module.exports = router;
