const express = require('express');
const chirpsStore = require('./chirpstore');

let router= express.Router();

router.get('/:id?', (request,response) => {
    let id= request.params.id
    if(id) {
        response.json(chirpsStore.GetChirp(id));
    } else{
        response.send(chirpsStore.GetChirps());
    }

});

router.post('/', (request,response) => {
    chirpsStore.CreateChirp(request.body);
    response.sendStatus(200);

});


module.exports = router;