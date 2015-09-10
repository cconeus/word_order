var wordOrder = function(input) {
    var i = 0;
    for (i; i < input, i++) {
        
    }
    return output;
  };

$(document).ready(function() {
    $("form#wordOrder").submit(function(event){
        var number = $("input#sentence").val();
        var result = romanNumeral(number);

        $(".output").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
