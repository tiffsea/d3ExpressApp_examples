var express = require('express');
var router = express.Router();

const coordinates = [ 
    [50,20], [100,200], [250,150], [150,30],
    [30,80], [200,140], [150,190], [350,50]
];

/* GET ejs file */
router.get('/', function(req, res, next) {
    res.render('index', { 
        title: 'Iterating Arrays',
        data: coordinates,
    });
});

module.exports = router;