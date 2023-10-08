let sub = document.getElementById('sub');
let msg = document.querySelector('.msg-box');
sub.addEventListener('click',Check)

function Check()
{
  let rng = document.getElementById('rng').value;

  if(rng==1)
  {
    msg.classList.add("red-msg");
    msg.style.display = "flex";
    msg.textContent = "😖 : sorry for bad expiriance , we are just trying to improve performence .";
  }
  else if(rng==2)
  {
    msg.classList.add("orangered-msg");
    msg.style.display = "flex";
    msg.textContent = "😞 : we also find some glitichis and bugs on webpages, we are gust trying solve bugs and glitchis .";
  }
  else if(rng==3)
  {
    msg.classList.add("orange-msg");
    msg.style.display = "flex";
    msg.textContent = "😊 : i think we found some query on your mind , we can clarify for improvment .";
  }
  else if(rng==4)
  {
    msg.classList.add("yellow-msg");
    msg.style.display = "flex";
    msg.textContent = "😀 : we think thear almost done , but now we stile working to improving performence .";
  }
  else if(rng==5)
  {
    msg.classList.add("green-msg");
    msg.style.display = "flex";
    msg.textContent = "🥰 : we are proude to provide a best performance and best facalitys to you , THANKS YOU . ";
  }
}