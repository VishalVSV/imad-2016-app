var button = document.getElementById('counter');

button.onclick = function (){
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function () {
      if(req.readystat === XMLHttpRequest.DONE) {
          if(req.status === 200) {
              var counter = req.responseText;
              var span = document.getElementById('count');
              span.innerHtml = counter.toString();
          }
      }  
    };
};
req.open('GET',"http://vishalvsv.imad.hasura-app.io/counter");