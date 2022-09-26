const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const PORT = 3000;

app.use(express.urlencoded({ extender: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id: uuid(),
        username: 'Carlos',
        comment: 'asdfasdfasdfasdfasdf adf;kjhsbdfb'
    },
    {
        id: uuid(),
        username: 'Ale',
        comment: 'asdfasdfasdfasasdf df;kjhsbdfb'
    },
    {
        id: uuid(),
        username: 'Alina',
        comment: 'hjtketasdfasdf adf;kjhsbdfb'
    },
    {
        id: uuid(),
        username: 'Lia',
        comment: 'liuhasdfjk df;kjhsbdfb'
    }
];

app.get('/comments', (req,res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req,res) => {
    res.render('comments/new');
});

app.post('/comments', (req,res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});