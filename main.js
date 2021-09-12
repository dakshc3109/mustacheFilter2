  
function preload(){

}

function setup(){
    var canvas = createCanvas(500, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(1280, 300);
    video.hide();

}

function draw(){
    image(video, 0, 0, 500, 300);
}

function take_snapshot(){
    save('myFilter.png');
}