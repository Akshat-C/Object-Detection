status1 = "";

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(550, 500);
    canvas.center();

    o_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Objects Detecting";
}

function modelLoaded()
{
    console.log("Object Detector has been loaded");
    status1 = true;
    o_detector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error()
    } else 
    {
        console.log(results);
    }
}

function draw()
{
    image(img, 0, 0, 550, 500);
    fill("red");
    text("dog", 70, 90);
    noFill();
    stroke("red");
    rect(50, 70, 400, 300);

    fill("red");
    text("cat", 260, 130);
    noFill();
    stroke("red");
    rect(250, 110, 400, 300);
}
