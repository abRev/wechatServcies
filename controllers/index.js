const Router = require('koa-router');
const router = new Router();

router.use('/wechat',require('./wechat').routes());

router.get('/', async ctx => {
    ctx.body = true;
})

module.exports = router;