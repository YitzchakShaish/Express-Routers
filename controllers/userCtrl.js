import { getNextId } from "../services/getId.js";
let users = [{ id: 1, name: 'Alice' }];

// GET '/users'
export const getUser = async (req, res) => {
    res.json({ allUsers: users });
};

//POST '/user'
export const postUser = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    const newUser = { id: getNextId(users), name };
    users.push(newUser);
    res.status(201).json(newUser);
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
     if (!id) {
        return res.status(400).json({ error: 'Id params is required' });
    }
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
        }
    const user = users.find(u => u.id == id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    user.name = name;
    res.status(200).json(user);
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
     if (!id) {
        return res.status(400).json({ error: 'Id params is required' });
    }
  
    const user = users.find(u => u.id == id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    users = users.filter(u => u.id != id);
    res.status(200).json(user);
}