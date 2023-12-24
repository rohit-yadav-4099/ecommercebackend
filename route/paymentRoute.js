const express = require("express").Router()
const Payment_route = express();

const bodyparser = require("body-parser");

Payment_route.use(bodyparser.json());
Payment_route.use(bodyparser.urlencoded({extended:false}));

const path = require("path");

// Payment_route.