import express from 'express';
import { database } from './database.js';
import cors from "cors";

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/bog/users', (req, res) => {
    res.json(database).status(200);
});

app.get('/api/bog/users/:id', (req, res) => {
    const user = database.filter((user) => user.id === req.params.id)[0]
    res.json(user).status(200)
});

app.delete('/api/bog/users/:id', (req, res) => {
    database.splice(database.findIndex((user) => user.id === req.params.id),1)
    res.status(200).json({ message: 'User deleted successfully' })
})

app.patch('/api/bog/users/update/:id', (req, res) => {
    const idx = database.findIndex((user) => user.id === req.params.id)
    database[idx] = req.body;
    res.status(200).json({ message: 'User updated successfully' })
})

app.post('/api/bog/users', (req, res) => {
    database.push(req.body)
    console.log(req.body)
    res.status(200).json({ message: 'Added successfully'})
})

app.get('/note/:id', (req,res) => {
  res.send(database[req.params.id].notes)
})
// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
