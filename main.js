quick_draw_data_set = ["airplane_carrier", "bus", "circle", "triangle"]
timer_counter = 0;
timer_check = '';
drawn_sketch = '';
answer_holder = '';
score = 0;


function setup(){
    canvas = createCanvas(280,280)
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis;

    // classifier = ml5.imageClassifier('Insert Link',modelLoaded)
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
    strokeWeight(13)
    stroke(0)
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult)
}

function gotResult(error, results){
    if (error){
        console.error(error)
    }else{

     console.log(results)
     document.getElementById("label").innerHTML = results[0].label;
     document.getElementById("confidence").innerHTML = results[0].confidence;

     utterThis = new SpeechSynthesisUtterance(results[0].label)
    }
}

function clearCanvas(){
    background("white")
}

function UpdateCanvas(){
    background("white");
    
    random_number = quick_draw_data_set
}