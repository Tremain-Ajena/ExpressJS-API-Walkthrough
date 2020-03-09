const express = require('express');
let router= express.Router();

router.get('/', (request,response) => {
    response.send('users');
});

module.exports = router;