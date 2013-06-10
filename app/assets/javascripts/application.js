//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require private_pub
//= require_tree .

// $(function() {
//   $("h1 a").on("click", function() {
//     alert("Yo!");
//   });
// });

$(document).ready(function() {
  $(".note").draggable();

  $( "#trash" ).droppable({
        drop: function( event, ui ) {
          $(ui.draggable).fadeOut();
          $.ajax({
            url: "/notes/" + ui.draggable.data('nid'),
            type: 'delete'
          });
        }
      });
});


// $.ajax({
//   url: "http://fiddle.jshell.net/favicon.png",
//   beforeSend: function ( xhr ) {
//     xhr.overrideMimeType("text/plain; charset=x-user-defined");
//   }
// }).done(function ( data ) {
//   if( console && console.log ) {
//     console.log("Sample of data:", data.slice(0, 100));
//   }
// });









