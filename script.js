$(document).ready(function(){

$("#click_butt").on("click", function(){
  var input = $("#search_bar").val()
  var url = "http://www.omdbapi.com/?s="
  var user_input = url + input

$.get(user_input, function(my_request){
  // console.log(my_request);
  for (var i = 0; i < my_request.Search.length; i++) {
    var poster = my_request.Search[i].Poster;
    var title = my_request.Search[i].Title;
      $("#center_column").append('<p class = "movie_title"> '+ title +' </p>').append('<img class="movie_poster" src= '+ poster +' />');
      }
    })
  });
});
