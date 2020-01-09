function vorbeste(cuvinte) {
    alert( cuvinte );
}

setTimeout(vorbeste, 5000, "Pari stresat, ai nevoie de o vacanta!");

let timerId = setInterval(() => alert('Pierzi ofertele!'), 2000);
setTimeout(() => { clearInterval(timerId); alert('Renunt cu tine'); }, 5000);


window.onload=function(){
    document.getElementById("my_audio").play();
}

