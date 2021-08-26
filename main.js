var noseX = 0;
var noseY = 0;


function preload()
{
    mustache = loadImage("https://i.postimg.cc/fW2CjvMn/a-Moustache.png");
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    canvas.position(470,300)
    video = createCapture(VIDEO);
    video.size(500 , 400);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 400);
    image(mustache,noseX,noseY,80,50);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

    }
}

function modelLoaded()
{
    console.log("PoseNet is initialized")
}

function take_snapshot()
{
    save('Image.png');
}