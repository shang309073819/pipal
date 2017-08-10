import Koa from 'koa'
import bodyParser from 'koa-better-body'
import favicon from 'koa-favicon'
import convert from 'koa-convert'
import config from './config'
import context from './middleware/context'
import catcher from './middleware/catcher'
import render from './middleware/render'
import routes from './routes'
import IO from 'koa-socket';

const app = new Koa();

//启动webSocket服务，定时发送数据
const chat = new IO('chat');
chat.attach(app);
chat.on('connection', ctx => {
    console.log('服务端socket连接', ctx.socket.id);
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            ctx.socket.emit('message', i);
        }, 1000 * i)

    }
})
app.use(favicon(config.http.favicon))
app.use(convert(bodyParser({
    formLimit: '200kb',
    jsonLimit: '200kb',
    bufferLimit: '4mb'
})))
app.use(context);
// exception
app.use(catcher)
// Routes
app.use(routes.routes())
// Serve static files
if (process.env.NODE_ENV !== 'production') {
    const mount = require('koa-mount')
    const serve = require('koa-static')
    for (const staticURL in config.http.static) {
        console.info(staticURL)
        app.use(mount(staticURL, convert(serve(config.http.static[staticURL]))))
    }
}
//render
app.use(render);
app.listen(config.http.port, function () {
    console.info('Listening on port ' + config.http.port)
});
