import express from 'express';
import * as postCtrl from '../controllers/postCtrl.js';

const router = express.Router();
router.get('/posts',postCtrl.getAllPost );
router.get('/posts/:id',postCtrl.getPostById );


router.post('/posts/addPost', postCtrl.addPost)

export default router;