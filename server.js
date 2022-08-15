const express = require('express');
const app = express();
const PORT = 3000;

app.get('/form', (req,res) => {
    res.send('GET /form response');
});

app.post('/form', (req,res) => {
    res.send('POST /form response');
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});