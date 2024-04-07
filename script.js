/*let tower = document.getElementsByClassName("tower")[0];
    let i = .8;
    tower.style.height = `${20-i}vh`;
    tower.style.top = `${30+i}vh`;*/

    let img = document.getElementsByTagName("img")[0];

    let createStyle0 = document.createElement("style");
    
    createStyle0.innerText = `
          
      @keyframes move{
        0%{
          transform: rotate(0deg);
        }
        25%{
          transform: rotate(10deg);
        }
        50%{
          transform: rotate(0deg);
        }
        75%{
          transform: rotate(-10deg);
        }
        100%{
          transform: rotate(0deg);
        }
        }`;
        
    img.appendChild(createStyle0);


    //createStyle1
    
    let createStyle1 = document.createElement("style");
    
    createStyle1.innerText = `
          
          @keyframes movee{
          from{
          transform: rotate(0deg);
          }
          to{
          transform: rotate(-30deg);
          }}`;
          
     img.addEventListener("touchstart", () => {
       img.style.animation = "none";
       img.style.transform = "rotate(-30deg)";
       
        //createStyle2
       
        let createStyle2 = document.createElement("style");
       
        createStyle2.innerText = `
                
                @keyframes moveOneTime {
                  0%{
                    transform: rotate(-30deg);
                  }
                  100%{
                    transform: rotate(0deg);
                  }
                }`;
       
        img.addEventListener("touchend", () => {
          img.style.animation = "moveOneTime 3s linear 0s 1 normal";
          img.appendChild(createStyle2);
        });
       
        //comeBackToAnimation
        let play = () => {
          img.style.animation = "none";
          img.style.animation = "move 5s linear 0s infinite normal";
        }
       
        img.addEventListener("touchend", () => {
          setTimeout(play, 3000);
       
        });
        
     });
   

   
  
  let alarmAudio = new Audio("ticTicAlarm.mp3");

let parent = document.querySelector(".parent");



  parent.style.animation = "parRotate 60s linear 0s infinite normal";

  let creStyle = document.createElement("style");
  

  creStyle.innerText = `
   
   @keyframes parRotate{
     0%{
       transform : rotate(0deg);
     }
     100%{
       transform : rotate(360deg);
     }
   }`;
  parent.appendChild(creStyle);