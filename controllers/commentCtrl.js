import { posts, comments } from "../DB/posts&comments.js"



// GET '/comments'
export const getAllComments = async (req, res) => {
    res.json({ allComments: comments });
};

// Middleware to check if post exists
export const checkPostExists = (req, res, next) => {
    const postId = parseInt(req.params.postId);
    if (!postId) {
        return res.status(400).json({ error: 'Post id is required' });
    }
    const postExists = posts.some(post => post.id == postId);
    if (!postExists) {
        return res.status(404).json({ error: 'Post not found' });
    }
    next();
};

export const getCommentByPostId = async (req, res) => {
    const postId = parseInt(req.params.postId);
    const comment = comments.filter(c => c.id == postId);
    if (!comment || comment.length === 0) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(comment);
};

//POST '/posts/addPost'
export const addCommentByPostId = async (req, res) => {
    const postId = req.params.postId;
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }
    const newComment = { id: postId, text };
    comments.push(newComment);
    res.status(201).json(newComment);
}
