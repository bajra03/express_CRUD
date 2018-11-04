import express from 'express';
import {
  getUsers,
  getUserById,
  deleteUser,
  register,
  updateUser
} from '../controller/users';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API SEND!');
});

router.post('/register', register);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

export default router;
