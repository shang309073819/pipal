import {extendObservable} from 'mobx'
import io from 'socket.io-client';



export default class Common {
    constructor(state = {}) {
        extendObservable(this, {
            num: 0
        }, state)
        this.initSocket()
    }

    //socket数据更新
    initSocket() {
        let chat = io('ws://localhost:2000/chat');
        chat.on('message', (data) => {
            this.num = data;
        });
    }
}
