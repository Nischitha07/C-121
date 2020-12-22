function preload()
{

}
function setup()
{
canvas = createCanvas(400,200);
canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('MobileNet' , modelLoaded);

}
function draw()
{
image(video , 0 , 0 , 400 , 200 );
classifier.classify(video , gotResult);
}
function modelLoaded()
{
    console.log("modelLoaded");
}
function gotResult(error , results)
{
    if (error)
    {
        console.error(error);
    }
    else{
        document.getElementById("object_result").innerHTML = results[0].label;
        document.getElementById("accuracy_result").innerHTML = results[0].confidence.toFixed(2);
    }
    console.log(results);
}