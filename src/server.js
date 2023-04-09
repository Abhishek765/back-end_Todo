import express from 'express';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000;

// Temp DB
const users = [];

// middleware
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.urlencoded({ extended: true }));

// View engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { name: 'Abhishek' });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  users.push({ name, email });
  res.render('login', { name: 'Abhishek' });
});

app.get('/users', (req, res) => {
  res.json({ users });
});

// serve listening
app.listen(PORT, () => {
  console.log(`server listening on port: http://localhost:${PORT}`);
});
