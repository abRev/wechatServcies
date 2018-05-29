const Koa = require('koa');
const Router = require( 'koa-router');

const bodyParser =require( 'koa-bodyparser');

const app = new Koa();

const router = require('./controllers');


app.use(bodyParser());
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(ctx.request.method, ctx.request.url ,'time: ', ms);
})
app.use(router.routes());
app.listen(9090);