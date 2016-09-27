var button = document.getElementById('counter');

//button.onclick = function (){
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function () {
      if(req.readyState === XMLHttpRequest.DONE) {
          if(req.status === 200) {
              var counter = req.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
              
          }
      }  
    };
    req.open('GET',"http://vishalvsv.imad.hasura-app.io/counter",true);
    req.send(null);
//};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit');
submit.onclick = function () {
    
    //button.onclick = function (){
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function () {
      if(req.readyState === XMLHttpRequest.DONE) {
          if(req.status === 200) {
              var names = req.responseText;
              names = JSON.parse(names);
              var list = '';
              for (var x = 0;x<names.length;x++){
                  list += "<p>" + names[x] + '</p>';
              }
              var chm = document.getElementById('chmes');
              chm.innerHTML = list;
              nameInput.value = "";
          }
      }  
    };
    name =nameInput.value;
    req.open('GET',"http://vishalvsv.imad.hasura-app.io/submit-message?name="+name,true);
    req.send(null);
    
    
};

var time = setInterval(function(){var req = new XMLHttpRequest();
    
    req.onreadystatechange = function () {
      if(req.readyState === XMLHttpRequest.DONE) {
          if(req.status === 200) {
              var names = req.responseText;
              names = JSON.parse(names);
              var list = '';
              for (var x = 0;x<names.length;x++){
                  list += "<p>" + names[x] + '</p>';
              }
              var chm = document.getElementById('chmes');
              chm.innerHTML = list;
          }
      }  
    };
    name =nameInput.value;
    req.open('GET',"http://vishalvsv.imad.hasura-app.io/submit-message?name="+name,true);
    req.send(null);
},1000);