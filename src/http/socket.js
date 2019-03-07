import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';


const options = {path: '/my-app/'};


export const socketInstance = io('localhost:5000');

