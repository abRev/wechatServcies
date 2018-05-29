const mongoose = require('mongoose');

const WechatSchema = new mongoose.Schema({
    appID:{type:String},
    appSecret:{type:String},
    token:{type:String},
    accessToken:{type:String},
    accessTokenTime:{type:Number},
    accessTicket:{type:String},
    accessTicketTime:{type:String}
});

mongoose.model('wechat', WechatSchema);