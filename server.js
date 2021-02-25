const EXPRESS = require('express');
const APP = EXPRESS();
const PATH = require('path');

const PORT = process.env.PORT || 5000;

APP.use(EXPRESS.static(PATH.join('cic-website', 'build')));
APP.listen(PORT);