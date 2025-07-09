import express from 'express';
import greetR from './routes/greetR.js';
import userR from './routes/userR.js'
import postR from './routes/postsR.js'
import  commentsR from './routes/commentsR.js';

const app = express();
const PORT = 3000;
app.use(express.json());


// greet routes
app.use('/', greetR);


//users routes
app.use('/', userR);

//posts routes
app.use('/', postR);

//comments routes
app.use('/', commentsR);

// Error handling middleware
app.use((req, res) => {
    res.status(404).send('Not found');
});


app.listen(PORT, () => {
  console.log('Listening on port '+PORT);
});
