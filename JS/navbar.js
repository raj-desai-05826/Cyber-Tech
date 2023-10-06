let bar = document.getElementById('bar');
let close = document.getElementById('close');
let drower = document.getElementById('drower');

bar.addEventListener('click',OpenMenu);
close.addEventListener('click',HideMenu);

function OpenMenu()
{
    drower.style.display = "block";
    bar.style.display = "none";
    close.style.display = "block";
}

function HideMenu()
{
    drower.style.display = "none";
    bar.style.display = "block";
    close.style.display = "none"; 
}