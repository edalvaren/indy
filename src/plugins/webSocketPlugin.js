
//
// const createWebSocketPlugin = () => {
//     const socket = io('localhost:5000')
//     return store => {
//         socket.on('connection', data => {
//           store.commit('socketStore/setSocketId', data)
//         });
//         // socket.on('TAG', msg => {
//         //     store.dispatch('socketStore/updateTags', msg)
//         // });
//         store.subscribe(mutation => {
//             if(mutation.type === 'socketStore/sendMessage'){
//                 this.socket.emit('SEND_TEST', mutation.payload)
//             }
//         })
//     }
// };

// export default createWebSocketPlugin;

