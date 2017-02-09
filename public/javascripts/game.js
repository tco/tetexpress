(function initializeApplication(window, document) {

    var colorPickerOne = document.getElementById("colorPickerOne");
    var colorPickerTwo = document.getElementById("colorPickerTwo");

    var Canvas = document.getElementById("canvas");

    var ctx = Canvas.getContext("2d");
    var grd = ctx.createLinearGradient(0,0,170,0);
    var color_var = "blue";
    var color_var_two = "red";

    var socket = io.connect('http://localhost:3000');
    socket.on('init', function () {
        console.log('connection initalized');
    });

    window.onerror = function() {
        console.log(arguments);
        return true;
    };

    function returnSomething(arg) {
        foobar();
    }

    colorPickerOne.onchange = function(event) {
        console.log("ColorPickerOne: ",event.target.value);
        color_var = event.target.value;
        socket.emit('changeColor', { color: color_var, colorTwo: color_var_two });
        draw();
    };
    colorPickerTwo.onchange = function(event) {
        console.log("ColorPickerTwo: ",event.target.value);
        color_var_two = event.target.value;
        socket.emit('changeColor', { color: color_var, colorTwo: color_var_two });
        draw();
    };

    returnSomething('joo');

    socket.on('colorChange', function(data) {
        if(colorPickerOne.value != data.color) {
            colorPickerOne.value = data.color;
            draw();
        }
        if(colorPickerTwo.value != data.colorTwo) {
            colorPickerTwo.value = data.colorTwo;
            draw();
        }
    });

    function draw() {
        color = document.getElementById("colorPickerOne").value;
        color_ = document.getElementById("colorPickerTwo").value;
        ctx = Canvas.getContext("2d");
        grd = ctx.createLinearGradient(0,0,170,0);
        grd.addColorStop(0, color);
        grd.addColorStop(1, color_);
        ctx.fillStyle = grd;
        ctx.fillRect(10, 10, 150, 80);
    }

}(window, window.document));
