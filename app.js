const express = require('express');

const app = express();
const port = process.env.APP_PORT || 3000;

app.use('/', (req, res) => {
    res.json({'hello': 'world'});
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
