var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //Make a request to counter
    
    // Capture the response value
    
    //Render the response value
    
counter = counter+1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();

    
};