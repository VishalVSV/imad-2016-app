var button = document.getElementById('counter');
var cnt =1;
var list;
var newMes;
var splChange = function(str) {
    str = str.replace('/*','<strong>');
    str = str.replace('*/','</strong>');
    str = str.replace('/~','<i>');
    str = str.replace('~/','</i>');
    str = str.replace('/-','<u>');
    str = str.replace('-/','</u>');
};

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

if (!!window.EventSource) {
  var source = new EventSource('http://vishalvsv.imad.hasura-app.io/server.js');
} else {
  // Result to xhr polling :(
}



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
                    list += '<p class="chmes">' + names[x] + '</p>';
                  }
              }
              var chm = document.getElementById('chmes');
              list = list.replace('/*','<strong>');
              list = list.replace('*/','</strong>');
              list = list.replace('/~','<i>');
              list = list.replace('~/','</i>');
              list = list.replace('/-','<u>');
              list = list.replace('-/','</u>');
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
        name = name.replace('/*','<strong>');
        name = name.replace('*/','</strong>');
        name = name.replace('/~','<i>');
        name = name.replace('~/','</i>');
        name = name.replace('/-','<u>');
        name = name.replace('-/','</u>');
        req.open('GET',"http://vishalvsv.imad.hasura-app.io/submit-message?name="+acname+":"+name,true);
        req.send(null);
    }
    else{
        var chm = document.getElementById('chmes');
        chm.innerHTML = '';
    }
    
};

submit.submit = function () {
    
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
                  list += '<p class="chmes">' + names[x] + '</p>';
                  }
              }
              var chm = document.getElementById('chmes');
              list = list.replace('/*','<strong>');
              list = list.replace('*/','</strong>');
              list = list.replace('/~','<i>');
              list = list.replace('~/','</i>');
              list = list.replace('/-','<u>');
              list = list.replace('-/','</u>');
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
        name = name.replace('/*','<strong>');
        name = name.replace('*/','</strong>');
        name = name.replace('/~','<i>');
        name = name.replace('~/','</i>');
        name = name.replace('/-','<u>');
        name = name.replace('-/','</u>');
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
    var isActiv;
    document.onkeypress = keyPress;

    function keyPress(e){
        var x = e || window.event;
        var key = (x.keyCode || x.which);
        if(key == 13 || key == 3){
            submit.onclick();      
        }
    }
    window.onfocus = function () { 
      isActiv = true; 
    }; 

    window.onblur = function () { 
      isActiv = false; 
    }; 

    //console.log("looped");
    req.onreadystatechange = function () {
      if(req.readyState === XMLHttpRequest.DONE) {
          if(req.status === 200) {
              console.log("worked");
              var names = req.responseText;
              names = JSON.parse(names);
              var oldList ="";
              
              var list = '';
              for (var x = 0;x<names.length;x++){
                //if (names[x].trim() !== null || names[x].trim() !== "" || names[x].trim() !== " ") {
                    //console.log("'"+names[x]+"'");
                    if (names[x]==='' || names[x] === null){
                        console.log(names[x]);
                    }else{
                        console.log('added');
                        list += "<p class=\"chmes\">" + names[x] + '</p>';
                        if (list.length <= oldList.length) {
                            newMes += 1;
                        }
                    }
                //}
                
              }
              
              var chm = document.getElementById('chmes');
              chm.style.fontSize = "20px";
              //console.log(list);
              if (chm.innerHTML!==list){
                console.log(list+"Updated"+chm.innerHTML);
                if (isActiv === true) {
                    document.getElementById("chtitle").innerHTML = "Vishal's Chat";
                }else{
                    if (newMes === undefined) {
                        
                    }else {
                        document.getElementById("chtitle").innerHTML = "Vishal's Chat ("+newMes+')';
                    }
                }
                list = list.replace('/*','<strong>');
                list = list.replace('*/','</strong>');
                list = list.replace('/~','<i>');
                list = list.replace('~/','</i>');
                list = list.replace('/-','<u>');
                list = list.replace('-/','</u>');
                chm.innerHTML = '' + list;
              }
          }
      }  
    };
    name ='';
    
    req.open('GET',"http://vishalvsv.imad.hasura-app.io/submit-message",true);
    req.send(null);
},1000);

