var nextPage = 2

$('.more-sprouts').on("click", function (event) {
  event.preventDefault();

  $.get("/tweets.json?page=" + (nextPage), function(data) {
    nextPage++;
    // data["tweets"].forEach(function(tweet) {
    //   $("#tweet-list").append("<li>" + tweet + "</li>");
    data.forEach(function(tweet) {
      $(".tweets").append("<li class='tweet'><div class='body'>" + tweet.text + "</div><div class='user'>" + tweet.username + "</div></li>");
    });
  });
});
