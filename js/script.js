$().ready(function() {

  var tweet = '';


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

function fetchJSON(data) {
  $('#author').text(data.quoteAuthor);
  $('#quote').html(data.quoteText);
  tweet = '"' + data.quoteText + '" ' + data.quoteAuthor;
  $('#tweet-btn').attr('href', 'https://twitter.com/intent/tweet?text=' + tweet);

}

function getNewQuote() {
  $.ajax( {
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=fetchJSON',
    type: "GET",
    dataType: "jsonp",
    crossDomain: true,
    cache: false
  });
}
