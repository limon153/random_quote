$().ready(function() {
  getNewQuote();
  $("#button").on("click", function(e) {
    e.preventDefault();
    $('body').css('--main-color', randomColor());
    getNewQuote();
  });
});

function randomColor() {
  var x = Math.round(0xffffff * Math.random()).toString(16);
  var y = 6 - x.length;
  var z = "000000";
  var z1 = z.substring(0, y);
  return "#" + z1 + x;
}

function getNewQuote() {
  $.ajax( {
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      $('#author').text(data[0].title);
      $('#quote').html(data[0].content);
    },
    cache: false
  });
}
