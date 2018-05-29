
const mongoose = require('mongoose');
const requireDir = require('require-dir');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/wechatService');

requireDir('./models');