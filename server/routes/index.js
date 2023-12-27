const express = require('express');
const router = express.Router();

const {generateFibonacciSeries} = require('./../utils/generate-fibonacci-series');

router.use((req,res,next)=>{
    // console.log("Request", req);
    next();
})

router.get('/',(req,res)=>{
    res.send('Hello World');
});

router.get('/getFibonacciSeries',(req,res)=>{
    const limit = req.query["limit"];
    console.log("limit", limit);
    const response = generateFibonacciSeries(limit);
    console.log(response);
    res.json(response);
})

module.exports = router;
