moustacheX=0;
moustacheY=0;

function preload(){
    moustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    tint_color="";
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        moustacheX=results[0].pose.moustache.x-15;
        moustacheY=results[0].pose.moustache.y-15;
        console.log("moustache x = "+ moustacheX);
        console.log("moustache y = "+ moustacheY);
    }
}

 function draw() { 
    image(video, 230, 150, 220, 200); 
    fill(255, 0, 0); 
    stroke(255, 0, 0); 
    circle(50, 50, 80); 
    circle(50, 430, 80); 
    circle(590, 50, 80); 
    circle(590, 430, 80); 
    fill(0, 128, 0); 
    stroke(0, 128, 0); 
    rect(90, 40, 460, 20); 
    rect(90, 420, 460, 20); 
    rect(40, 90, 20, 300); 
    rect(580, 90, 20, 300);
    
    
}

function take_snapshot(){
    save("filtered_image.png")
}
