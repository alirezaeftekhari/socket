// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }
// const id = makeid(5);
// document.querySelector('#hid').innerHTML = id;
const id = document.querySelector('#hid').innerText;
const socketID = io('https://sekonj.herokuapp.com/');
socketID.on(id, (data) => {
    console.log(data);
});

function f() {
    const socket = io('https://sekonj.herokuapp.com/');
    socket.on('connect',()=>{
        console.log('sent!');
        let obj = {};
        obj.to = document.querySelector('#to').value
        obj.id = parseInt(document.querySelector('#id').value);
        obj.shotpower = parseFloat(document.querySelector('#shotpower').value);
        let pos = {};
        pos.x = parseFloat(document.querySelector('#px').value);
        pos.y = parseFloat(document.querySelector('#py').value);
        pos.z = parseFloat(document.querySelector('#pz').value);
        obj.palyerPosition = pos;
        let dir = {};
        dir.x = parseFloat(document.querySelector('#dx').value);
        dir.y = parseFloat(document.querySelector('#dy').value);
        dir.z = parseFloat(document.querySelector('#dz').value);
        obj.dir = dir;
        obj.angle = parseFloat(document.querySelector('#angle').value);
        let circle = {};
        circle.x = parseFloat(document.querySelector('#cx').value);
        circle.y = parseFloat(document.querySelector('#cy').value);
        obj.circle = circle;
        socket.emit('data', obj);
    });
}
