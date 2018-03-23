
$(document).ready(function() {
    $("button").click(loadQuote);
})

function loadQuote() {
    
    $.ajax({headers: {
        Accept: "application/JSON",
        "X-Mashape-Key": "gKEoM3hoVvmshv6v2hXiKsP53W5Kp1gt107jsnQ9g4jIy4iTwP",
    }, url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat="
    ,   success: function(result) {
            
            $("h3").text(result.quote);
            $("h4").text("-" + result.author);
            
        }
    })

}
function show(result) {
    console.log(result);
}

