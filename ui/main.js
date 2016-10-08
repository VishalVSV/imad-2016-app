var button = document.getElementById('counter');
var cnt =1;

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
                  if (names[x] === '' || names[x] === null) {
                      
                  }else{
                  list += "<p class='chmes'>" + names[x] + '</p>';
                  }
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
    if (name !=='/clear') {
        req.open('GET',"http://vishalvsv.imad.hasura-app.io/submit-message?name="+acname+":"+name,true);
        req.send(null);
    }
    else{
        var chm = document.getElementById('chmes');
        chm.innerHTML = '';
    }
    
};
console.log("timer started!");
var time = setInterval(function(){var req = new XMLHttpRequest();
    console.log("looped");
    req.onreadystatechange = function () {
      if(req.readyState === XMLHttpRequest.DONE) {
          if(req.status === 200) {
              console.log("worked");
              var names = req.responseText;
              names = JSON.parse(names);
              var list = '';
              for (var x = 0;x<names.length;x++){
                //if (names[x].trim() !== null || names[x].trim() !== "" || names[x].trim() !== " ") {
                    console.log("'"+names[x]+"'");
                    if (names[x]==='' || names[x] === null){
                        
                    }else{
                     list += "<p class='chmes'>" + names[x] + '</p>';
                    }
                //}
                
              }
              
              var chm = document.getElementById('chmes');
              console.log(list);
              if (chm.innerHTML!==list){
                console.log(list);
                chm.innerHTML = list;
              }
          }
      }  
    };
    name ='';
    
    req.open('GET',"http://vishalvsv.imad.hasura-app.io/submit-message",true);
    req.send(null);
},1000);