
const express = require('express');
const {json} = require('body-parser');
const app = express();
const port = 5000;

app.use( json () );

const mainMdwr = require('./features/mainMdwr');
const mainRoutes = require('./features/mainRoutes');

app.use(mainMdwr.addHeaders);

mainRoutes(app);
