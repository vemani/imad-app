var xyz = document.getElementById('counter');
xyz.onclick = function() {
    //create a request object
    var request = new XMLHttpRequest();
    // Capture the response value
    request.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            //take some action
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString(); 
            }
            
        }
        //not done
    };
    //Make the request
    
request.open('GET', 'http://vemani.imad.hasura-app.io/counter', true);
request.send(null);
};
