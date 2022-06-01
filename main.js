function preload()
{
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(550, 500);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 550, 500);
    fill("red");
    text("dog", 70, 90);
    noFill();
    stroke("red");
    rect(50, 70, 400, 300);
}
