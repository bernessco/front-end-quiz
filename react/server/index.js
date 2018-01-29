const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));

app.options('*', cors());
app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
