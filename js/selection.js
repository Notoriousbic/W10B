var synthPick = Cookies.get('synthCookie');

sFinal.innerHTML = ("the synth you picked",(synthPick));

function deleteCookie(){
    Cookies.remove('synthCookie')
    window.open("index.html");
}
