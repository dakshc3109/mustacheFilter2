  
function preload(){

}

function setup(){
    var canvas = createCanvas(500, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(1280, 300);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        console.log("nose x: " + noseX);
        console.log("nose y: " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 500, 300);
}

function take_snapshot(){
    save('myFilter.png');
}
