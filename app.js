/*jshint esversion: 6 */

$(document).ready(function() {
  var baseURL = 'https://enigmatic-beyond-55261.herokuapp.com/api/v1/movies/';
  $.get(baseURL)
  .then(appendMovies);

  // let source   = $("#entry-template").html(); // Grab the template
  // let template = Handlebars.compile(source);  // Compile the template
  // let context = {title: "My New Post", body: "This is my first post!"};  // Create context for the template
  // let html    = template(context);  // Pass in the context that you want the tempate to render
  //
  // $('.content').append(html)

});

function appendMovies(data) {
  let movies = data;
  let source   = $("#all-movies-template").html(); // Grab the template
  let template = Handlebars.compile(source);  // Compile the template
  let context = {movie: movies};  // 'movie' is the 'key' in the html hdb template script
  let html    = template(context);  // Pass in the context that you want the tempate to render

  $('.movies').append(html);
}
