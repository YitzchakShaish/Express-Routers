import express from 'express';
import * as userCtrl from '../controllers/userCtrl.js';

const router = express.Router();
router.get('/users', userCtrl.getUser);


router.post('/users/createUser', userCtrl.postUser)

router.put('/users/update/:id', userCtrl.updateUser);

router.delete('/users/delete/:id', userCtrl.deleteUser);

//users/:id
export default router;