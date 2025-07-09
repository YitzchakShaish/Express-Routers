// GET '/greet'
export const getGreet = async (req, res) => {
    res.json({ msg: 'Hello from /greet!' });
};