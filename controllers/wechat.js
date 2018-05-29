const Router = require('koa-router');
const sha1 = require('sha1');
const router = new Router();

router.get('/', async ctx => {
    const {signature, nonce, timestamp, echostr} = ctx.request.query;
    var str = [timestamp,nonce,'abangReadBook'].sort().join("");
    if (signature == sha1(str)) {
        ctx.body = true;
    } else {
        ctx.body = false;
    }
})

module.exports = router;