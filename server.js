const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.urlencoded({ extender: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id: 1,
        username: 'Carlos',
        comment: 'asdfasdfasdfasdfasdf adf;kjhsbdfb'
    },
    {
        id: 2,
        username: 'Ale',
        comment: 'asdfasdfasdfasasdf df;kjhsbdfb'
    },
    {
        id: 3,
        username: 'Alina',
        comment: 'hjtketasdfasdf adf;kjhsbdfb'
    },
    {
        id: 4,
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
    console.log(username, comment);
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    console.log(comment);
    res.render('comments/show', { comment });
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});