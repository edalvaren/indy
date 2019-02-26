import axios from 'axios';
import router from './router';
import socket from './socket';
import socketStore from './socketStore';

export const http = {
    install(Vue, options){
        Vue.prototype.$http = axios.create();
    }
};

export {router, socket, socketStore};