var song;
function preload(){
    song = loadSound("music.mp3");
}

function music_f(){
    //song.play();
    console.log("Loadedddddddddddddddddd");
}

function setup(){
    canvas = createCanvas(440, 380);
    canvas.position(410, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 440, 380);
     
    fill(255, 0, 0);
    stroke(0, 128, 0);
    rect(0, 0, 460, 20);

    fill(255, 0, 0);
    stroke(0, 128, 0);
    rect(0, 360, 460, 20);

    fill(255, 0, 0);
    stroke(0, 128, 0);
    rect(0, 0, 20, 460);

    fill(255, 0, 0);
    stroke(0, 128, 0);
    rect(420, 0, 20, 460);

    fill(255, 187, 0);
    stroke(0, 128, 0);
    circle(10, 360, 100, 100);
        fill(255, 187, 0);
    stroke(0, 128, 0);
    circle(10, 10, 100, 100);
        fill(255, 187, 0);
    stroke(0, 128, 0);
    circle(420, 360, 100, 100);
        fill(255, 187, 0);
    stroke(0, 128, 0);
    circle(420, 10, 100, 100);
        fill(255, 187, 0);
    stroke(0, 128, 0);
    (10, 360, 100, 100);
}

function ayeetedclick(){
    song.play();
    save("Happy Birthday Natasha. Hope this is good enough for you. Your brother was lazy and forced me to make this for you. He also forgot your birthday. Go scold him or something. He deserves it.gif");
    console.log("LOADED");
    document.getElementById("stopbutton").innerHTML = `<button class="btn btn-info" onclick="stopnow()">Stop Music</button>`;
}


function stopnow(){
    song.stop();
    document.getElementById("stopbutton").innerHTML = ``;
    document.getElementById("startbutton").innerHTML = `<button class="btn btn-primary" onclick="startnow()">Start Music</button>`;
}

function startnow(){
    song.play();
    document.getElementById("startbutton").innerHTML = ``;
    document.getElementById("stopbutton").innerHTML = `<button class="btn btn-info" onclick="stopnow()">Stop Music</button>`;
}