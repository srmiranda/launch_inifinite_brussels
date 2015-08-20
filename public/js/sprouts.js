
//

// Old Way with Link

// $('.more-sprouts').on("click", function (event) {
//   event.preventDefault();

var nextPage = 2

$(window).scroll(function() {
  if($(window).scrollTop() == $(document).height() - $(window).height()) {
  $.get("/tweets.json?page=" + (nextPage), function(data) {
    nextPage++;
    data.forEach(function(tweet) {
      $(".tweets").append("<li class='tweet'><div class='body'>" + tweet.text + "</div><div class='user'>" + tweet.username + "</div></li>");
    });
  });
 }
});
