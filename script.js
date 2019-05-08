var movieReview = [
        "'This finale reminds us of movies gone by, celebrating the heroes we’ve come to know and giving them, I think, a fitting coda.'-Plugged In",
        "'Avengers: Endgame, settling scores, wrapping up loose ends and taking a victory lap generate some comic sparks as well as a few honest tears.'-The NYTimes",
        "'Avengers Endgame is a perfect farewell packed with emotions and grandeur, Must watch for Marvel fans!'-Behindwoods"
        ];
        
$(".movies").click(function(){
    movieReview.forEach(function(review){
        $("#movieReviews").append("<p>"+ review +"</p>");
    });
});
     
    
    


