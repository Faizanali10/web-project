const express=require('express');
const mongoose = require('mongoose');
const url="mongodb://localhost:27017/mobile";
mongoose.connect(url);