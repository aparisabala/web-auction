const router = require('express').Router();
const ctrl = require('@src/controllers/public/publicController');
const homeRoute = router.get('/current-bidding', ctrl.list);
module.exports = homeRoute;