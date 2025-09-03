let savedLink = ""; 
    document.getElementById("btn1").onclick = function(){
      let link = prompt("Введіть посилання: ");
      if(link){
        savedLink = link;
        alert("Посилання збережено!");
      }
    };

    document.getElementById("btn2").onclick = function(){
      if(savedLink){
        window.location.href = savedLink;
      } else{
        alert("Спочатку введіть посилання!");
      }
    };