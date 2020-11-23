window.onload = function() {
    var div = document.querySelector("#test-div");
    div.addEventListener("click", function(evt){
        console.log("test");
        console.log(toString.call(evt));
        console.log(evt.target);
    });

    var test = new XMLHttpRequest();
    test.open("GET", "/float.html");
    test.addEventListener("load", function(response){
        console.log(response);
    });
    test.send();
}

