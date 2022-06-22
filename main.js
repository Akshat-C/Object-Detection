status1 = "";
object = [];
recx = 0;
recy = 0;
recw = 0;
rech = 0;
recn = 0;
recp = 0;
function preload()
{}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start()
{
    o_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Objects Detecting";
}

function modelLoaded()
{
    console.log("Object Detector has been loaded");
    status1 = true;
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
    image(video, 0, 0, 380, 380);

    if (status1 != "")
    {
        o_detector.detect(video, gotResults);
        r = random(255);
        g = random(255);
        b = random(255);
        for (i = 0; i < object.length; i++)
        {    
        recx = object[i].x;
        recy = object[i].y;
        recw = object[i].width;
        rech = object[i].height;
        recn = object[i].label;
        recp = object[i].confidence; 
        document.getElementById("status").innerHTML = "Objects Detetced";
        document.getElementById("num_obj").innerHTML = "Number of Objects Detected are: "+object.length;
        fill(r, g, b);
        percentage = floor(recp*100)
        text(recn +" "+percentage+"%", recx + 15, recy + 15);
        noFill();
        stroke(r, g, b);
        rect(recx-120, recy, recw, rech);
        }
    }
}
