import { text } from "express";
import { getNextId } from "../services/getId.js";
import { posts, comments } from "../DB/posts&comments.js"



// GET '/posts'
export const getAllPost = async (req, res) => {
    res.json({ allPosts: posts });
};

export const getPostById = async (req, res) => {
    const id = req.params.id;
    const post = posts.find(p => p.id == id)
    res.json({ post });
};

//POST '/posts/addPost'
export const addPost = async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    const newPost = { id: getNextId(posts), title };
    posts.push(newPost);
    res.status(201).json(newPost);
}
