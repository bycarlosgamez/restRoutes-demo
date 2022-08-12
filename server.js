const express = require('express');
const app = express();
const PORT = 3000;

app.get('/pedals', (req,res) => {
    res.send('GET /pedals response');
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});