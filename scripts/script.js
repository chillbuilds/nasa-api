var camChoice = "";
var resp = "";
var APIKey = "fzF4NiozSfJsw3dQiAaHoExxhSDBC9BqMwEzu8AP";
var whichKey = 0;
var queryURL = "";
var camShort = ["FHAZ", "NAVCAM", "MAST", "RHAZ"]
// ^ ^ ^ response.photos[1].rover.cameras[1].name
var camLong = ["Front Hazard Avoidance Camera", "Navigation Camera", "Mast Camera", "Rear Hazard Avoidance Camera"]

function savedDates(){
    
}

function curiosityCall(){
    var year = $("#year").val();
    var month = $("#month").val();
    var day = $("#day").val();
    queryURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+year+"-"+month+"-"+day+"&api_key=" + APIKey;
    $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        $(".photoDump").html("");
        resp = response;
        for (i = 0; i < resp.photos.length; i++){
            if(camChoice == resp.photos[i].camera.name){
                var imageVar = $("<img>");
                imageVar.addClass("imageLink");
                imageVar.attr("src", resp.photos[i].img_src);
                $(".photoDump").append(imageVar);
                console.log(resp.photos[i].img_src);}}
    })}

function satelliteCall(){
    var year = $("#year").val();
    var month = $("#month").val();
    var day = $("#day").val();
    var lon = $("#longitude").val();
    var lat = $("#latitude").val();
    queryURL = "https://api.nasa.gov/planetary/earth/imagery?lon="+lon+"&lat="+lat+"&date="+year+"-"+month+"-"+day+"&api_key=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
        })}


$(".cameraBtn").on("click", function (){
    camChoice = $(this).attr("id");
    curiosityCall();
})

$(document).on("keyup", function(event){
    var n = event.which;
    if(n === 13){
        satelliteCall();}
})

//4-21-2015