function foo(input) {
    debugger;
    var a = [], b = [], prev;

    input.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}

$(document).ready(function() {
    $("form#wordOrder").submit(function(event){
        var number = $("input#sentence").val();
        var result = foo(arr);

        $(".output").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
