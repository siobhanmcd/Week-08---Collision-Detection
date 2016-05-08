/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite border when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/
//variables are place holders for information

var puck_x = 210;
var puck_y = 210;
var puck = document.getElementById('puck')
var speed = 50;

puck.style.left = puck_x +'px';
puck.style.top = puck_y +'px';


function logCoordinates() {
    console.log('x:'+puck_x+'y:'+puck_y);
}

function gapCollide() {
    if (puck_x > 250 && puck_x < 350
        && puck_y > 150 && puck_y < 250){
            document.getElementById('gap').style.backgroundColor = 'red';    
        }
    else document.getElementById('gap').style.backgroundColor = 'white';
}

function bigger() {
    if (puck_x > 225 && puck_x < 275 && puck_y > 45 && puck_y <100) {
        document.getElementById('puck').style.width = '50px';
        document.getElementById('puck').style.height = '50px';}
}

function smaller() {
    if (puck_x > 200 && puck_x < 260 && puck_y > 300 && puck_y <360) {
        document.getElementById('puck').style.width = '10px';
        document.getElementById('puck').style.height = '10px';}
}

document.getElementById('right').addEventListener('click', function() {
    if (puck_x < 600){
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates ()
    gapCollide ()
    bigger ()
    smaller ()
    }
    
});

document.getElementById('left').addEventListener('click', function() {
    if (puck_x > 0){
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates ()
    gapCollide ()
    bigger ()
    smaller()
    }
}); 
    

document.getElementById('up').addEventListener('click', function() {
    if (puck_y > 0) {
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates ()
    gapCollide ()
    bigger ()
    smaller ()
    }
});

document.getElementById('down').addEventListener('click', function() {
    if (puck_y < 400) {
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates ()
    gapCollide ()
    bigger ()
    smaller ()
    }
});