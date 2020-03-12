const express = require('express');
const router = express.Router();


router.get('/',function (request,response) {
    response.send('bluetooth');
});


router.post('/',function (request,response) {
    response.send('bluetooth');
});

module.exports = router;
