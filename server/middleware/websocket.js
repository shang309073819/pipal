export default async (ctx, next) => {
    console.log('start');
    // await new Promise((resolve, reject) => {
    //     for (let i = 0; i < 10; i++) {
    //         setTimeout(() => {
    //             console.log(i)
    //         }, 1000 * i)
    //     }
    //     resolve();
    // });
    await next();
    // console.log('end');
}



// import IO from 'koa-socket';
const app = new Koa();
// const chat = new IO('chat');
// chat.attach(app);
// chat.on('connection', ctx => {
//     console.log('服务端socket连接', ctx.socket.id);
//     // let num = 0;
// 	//
//     // setTimeout(()=>{console.log('dafsa')}, 1000);
// 	//
// 	//
//     // setTimeout(() => {
//     //     console.log('dadfasf')
//     //     num++;
//     //     ctx.socket.emit('message', num);
//     // }, 3000)
// })
