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

function playSound(url){
  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = url;
  audio.autoplay = true;
  audio.onended = function(){
    audio.remove(); //Remove when played.
  };
  document.body.appendChild(audio);
}

function occurrences(string, subString, allowOverlapping = false) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

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
              playSound('/ui/whatsappor_uH3POzYW.mp3');
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
        for (e = 0;e<occurrences(name,"/");e++){
            name = name.replace('/cr','<span style="color:red;">');
            name = name.replace('cr/','</span>');
            name = name.replace('/cb','<span style="color:blue;">');
            name = name.replace('cb/','</span>');
            name = name.replace('/cg','<span style="color:green;">');
            name = name.replace('cg/','</span>');
            name = name.replace('/*','<strong>');
            name = name.replace('*/','</strong>');
            name = name.replace('/~','<i>');
            name = name.replace('~/','</i>');
            name = name.replace('/-','<u>');
            name = name.replace('-/','</u>');
            acname = acname.replace('/cr','<span style="color:red;">');
            acname = acname.replace('cr/','</span>');
            acname = acname.replace('/cb','<span style="color:blue;">');
            acname = acname.replace('cb/','</span>');
            acname = acname.replace('/cg','<span style="color:green;">');
            acname = acname.replace('cg/','</span>');
            acname = acname.replace('/*','<strong>');
            acname = acname.replace('*/','</strong>');
            acname = acname.replace('/~','<i>');
            acname = acname.replace('~/','</i>');
            acname = acname.replace('/-','<u>');
            acname = acname.replace('-/','</u>');
        }
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
        var temp = name;
        var count = (temp.match(/is/g) || []).length;

        for (e = 0;e<occurrences(name,"/");e++){
            name = name.replace('/cr','<span style="color:red;">');
            name = name.replace('cr/','</span>');
            name = name.replace('/cb','<span style="color:blue;">');
            name = name.replace('cb/','</span>');
            name = name.replace('/cg','<span style="color:green;">');
            name = name.replace('cg/','</span>');
            name = name.replace('/*','<strong>');
            name = name.replace('*/','</strong>');
            name = name.replace('/~','<i>');
            name = name.replace('~/','</i>');
            name = name.replace('/-','<u>');
            name = name.replace('-/','</u>');
            acname = acname.replace('/cr','<span style="color:red;">');
            acname = acname.replace('cr/','</span>');
            acname = acname.replace('/cb','<span style="color:blue;">');
            acname = acname.replace('cb/','</span>');
            acname = acname.replace('/cg','<span style="color:green;">');
            acname = acname.replace('cg/','</span>');
            acname = acname.replace('/*','<strong>');
            acname = acname.replace('*/','</strong>');
            acname = acname.replace('/~','<i>');
            acname = acname.replace('~/','</i>');
            acname = acname.replace('/-','<u>');
            acname = acname.replace('-/','</u>');
        }
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
                playSound('/ui/whatsappor_uH3POzYW.mp3');
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

