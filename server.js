const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.urlencoded({ extender: true }));
app.use(express.json());
app.set('views', path.join(__dirname), 'views')
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'Carlos',
        commnet: 'asdfasdfasdfasdfasdf adf;kjhsbdfb'
    },
    {
        username: 'Ale',
        commnet: 'asdfasdfasdfasasdf df;kjhsbdfb'
    },
    {
        username: 'Alina',
        commnet: 'hjtketasdfasdf adf;kjhsbdfb'
    },
    {
        username: 'Lia',
        commnet: 'liuhasdfjk df;kjhsbdfb'
    }
]

app.get('/form', (req,res) => {
    res.send('GET /form response');
});

app.post('/form', (req,res) => {
    const { pedal, qty } = req.body;
    res.send(`Here's your ${qty} ${pedal}`);
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});