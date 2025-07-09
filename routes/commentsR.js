import express from 'express';
import * as commentCtrl from '../controllers/commentCtrl.js'

const router = express.Router({ mergeParams: true });

router.get('/posts/:postId/comments', commentCtrl.checkPostExists, commentCtrl.getCommentByPostId);

router.get('/comments/', commentCtrl.getAllComments)

router.post('/posts/:postId/comments',commentCtrl.checkPostExists, commentCtrl.addCommentByPostId)

export default router;
