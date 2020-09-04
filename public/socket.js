function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const id = makeid(5);
document.querySelector('#hid').innerHTML = id;

const socketID = io('http://localhost:3000');
socketID.on(id, (data) => {
    console.log(data);
});

function f() {
    const socket = io('http://localhost:3000');
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
        obj.position = pos;
        obj.angle = parseFloat(document.querySelector('#angle').value);
        let circle = {};
        circle.x = parseFloat(document.querySelector('#cx').value);
        circle.y = parseFloat(document.querySelector('#cy').value);
        obj.circle = circle;
        socket.emit('data', obj);
    });
}