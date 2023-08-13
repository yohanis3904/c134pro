
img = "";
status = "";
objects = [];

function preload(){
audio = loadSound("alert_alert.mp3");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video =  createCapture(VIDEO);
    video.size(380,380);
    video,hide();
    objectDetector = ml5.objectDetector('cocossd', modelLooaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLooaded() {
    console.log("Model Loaded!");
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
} 

function draw() {
    image(video, 0, 0, 380, 380);
    if(status != "person"){
         if(status != "person") {
            r = random(255);
            g = random(255);
            b = random(255);
            for (i=0; i < object.length; i++) {
        document.getElementById("status").innerHTML = "Satus : Object Detected";
        document.getElementById("number_of _objects").innerHTML = "Number of objects  detected are : "+ objects.length;
        audio.stop();

        fill(r,g,b);
        percent =floor(object[i].confidence * 100);
        text(object[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r, g, b);
        rect(objects[i].x, object[i].y, objects[i].width, objects[i].height);
        }
        }
    }
    
}



