var responseVar = "";
var APIKey = "fzF4NiozSfJsw3dQiAaHoExxhSDBC9BqMwEzu8AP";
var queryURL = "https://api.nasa.gov/planetary/apod?api_key=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the resulting object
      console.log(response);
        responseVar = response;
    })