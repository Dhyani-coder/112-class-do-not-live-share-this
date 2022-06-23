// https://teachablemachine.withgoogle.com/models/9r_5KZYMA/

Webcam.set({
    width : 350,
    height : 300,
    image_format : "jpeg",
    jpeg_quality : 90    
});

my_cam = document.getElementById("camera");

Webcam.attach(my_cam);

function CAPTURE(){
    Webcam.snap(function(snap_shot){

        document.getElementById("result").innerHTML ="<img src= '" + snap_shot + "' id = 'RESULT'>";

    })

    
}