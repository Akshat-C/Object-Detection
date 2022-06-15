status1 = "";
object = [];
recx = 0;
recy = 0;
recw = 0;
rech = 0;
recn = 0;
recp = 0;
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
        object = results;
    }
}

function draw()
{
    image(img, 0, 0, 550, 500);

    if (status1 != "")
    {
        for (i = 0; i < object.length; i++)
        {
        recx = object[i].x;
        recy = object[i].y;
        recw = object[i].width;
        rech = object[i].height;
        recn = object[i].label;
        recp = object[i].confidence; 
        document.getElementById("status").innerHTML = "Objects Detetced";
        fill("red");
        percentage = floor(recp*100)
        text(recn +" "+percentage+"%", recx + 15, recy + 15);
        noFill();
        stroke("red");
        rect(recx-120, recy, recw, rech);
        }
    }
}
