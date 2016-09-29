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
var chname=document.getElementById('chname');
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
    var acname =chname.value;
    if(acname===''){
        acname='Anonymous';
    }
    req.open('GET',"http://vishalvsv.imad.hasura-app.io/submit-message?name="+acname+':'+name,true);
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
                  if (names[x] !== null) {
                     list += "<p>" + names[x] + '</p>';
                  }
              }
              var chm = document.getElementById('chmes');
              chm.innerHTML = list;
          }
      }  
    };
    name ='';
    req.open('GET',"http://vishalvsv.imad.hasura-app.io/submit-message?name="+name,true);
    req.send(null);
},1000);