import express from 'express';
import greetR from './routes/greetR.js';

const app = express();
const PORT = 3000;


// greet routes
app.use('/', greetR);

// app.get('/greet', (req, res) => {
//   res.json({ msg: 'Hello from /greet!' });
// });

app.listen(PORT, () => {
  console.log('Listening on port '+PORT);
});
