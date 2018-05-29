const Koa = require('koa');
const Router = require( 'koa-router');
const bodyParser =require( 'koa-bodyparser');

const app = new Koa();

const router = require('./controllers');
require('./serverInit');

app.use(bodyParser());
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(ctx.request.method, ctx.request.url ,'time: ', ms, 'response: ', ctx.body);
})
app.use(router.routes());
app.listen(1234,(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('server start listen in 1234')
    }
});